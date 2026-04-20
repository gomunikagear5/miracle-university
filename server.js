const http = require('http');
const url = require('url');
const fs = require('fs');
const nodemailer = require('nodemailer');
const { Server } = require('socket.io');
const messagesFile = './chat-messages.json';
const loadMessages = () => {
  if (fs.existsSync(messagesFile)) {
    return JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
  }
  return [];
};
const saveMessages = (messages) => {
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
};
let messages = loadMessages();

const MODEL = 'digital-nao';
const OLLAMA_URL = 'http://localhost:11434/api/chat';

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (path === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { message, history = [] } = JSON.parse(body);

        const response = await fetch(OLLAMA_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: MODEL,
            messages: [
              ...history,
              { role: 'user', content: message }
            ],
            stream: false,
            options: {
              temperature: 0.85,
              num_ctx: 32768
            }
          }),
        });

        const data = await response.json();
        const reply = data.message.content;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ reply, model: MODEL }));
      } catch (e) {
        console.error(e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
  } else if (path === '/api/members' && req.method === 'GET') {
    const members = JSON.parse(fs.readFileSync('./members.json', 'utf8'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(members));
  } else if (path === '/api/members' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const newMember = JSON.parse(body);
      const members = JSON.parse(fs.readFileSync('./members.json', 'utf8'));
      members.push(newMember);
      fs.writeFileSync('./members.json', JSON.stringify(members, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
  } else if (path === '/api/send-email' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      const { to, subject, text } = JSON.parse(body);
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'placeholder@gmail.com',
          pass: process.env.EMAIL_PASS || 'placeholder'
        }
      });
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER || 'placeholder@gmail.com',
          to,
          subject,
          text
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
  } else if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Digital Nao Local API</h1><p>POST to /api/chat with { "message": "your question", "history": [] }</p><p>Model: digital-nao (local Ollama)</p>');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 3001;
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('login', (user) => {
    socket.user = user;
    socket.emit('logged in', user);
  });

  socket.on('get messages', (room) => {
    socket.emit('messages', messages.filter(m => m.room === room));
  });

  socket.on('join', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('chat message', (msg) => {
    if (!socket.user) {
      socket.emit('unauthorized');
      return;
    }
    msg.user = socket.user;
    msg.timestamp = new Date().toISOString();
    msg.id = Date.now().toString();
    if (msg.parentId) {
      const parent = messages.find(m => m.id === msg.parentId && m.room === msg.room);
      if (parent) {
        if (!parent.replies) parent.replies = [];
        parent.replies.push(msg);
      }
    } else {
      messages.push(msg);
    }
    saveMessages(messages);
    console.log('Message:', msg);
    io.to(msg.room).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Digital Nao Local API running on http://localhost:${PORT}`);
  console.log('Using local Ollama model "digital-nao" with full Nao persona.');
  console.log('Ready for beta test with campus chat and digital-nao.html.');
});
