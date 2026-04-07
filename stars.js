// stars.js — shared animated star field for Miracle University
function initStars(count = 220) {
  const container = document.createElement('div');
  container.id = 'star-field';
  container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
  document.body.prepend(container);

  const colors = ['#ffffff', '#ffffff', '#ffffff', '#f0c040', '#c8a0ff', '#a0c8ff'];

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    const size = Math.random() < 0.15 ? (2 + Math.random() * 2) : (0.8 + Math.random() * 1.4);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 8;
    const duration = 2.5 + Math.random() * 4;
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    star.style.cssText = `
      position:absolute;
      left:${x}%;
      top:${y}%;
      width:${size}px;
      height:${size}px;
      background:${color};
      border-radius:50%;
      animation:twinkle ${duration}s ${delay}s infinite ease-in-out;
      --star-glow:${color};
    `;
    container.appendChild(star);
  }
}
