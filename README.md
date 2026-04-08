# Miracle University — Member Portal

Nao Stanton's group consulting platform. Cosmic aesthetic matching the Soul Mission Quiz.

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | / | Landing/sales page with pricing |
| `login.html` | /login | Member login |
| `dashboard.html` | /dashboard | Member dashboard (cohort, Zoom, homework) |
| `community.html` | /community | **Discord-like Community Campus** — full interactive chat UI inspired by The Real World. Joy Boy energy, soul mission channels, viral lab, live voice simulation, persistent local messages. |
| `digital-nao.html` | /digital-nao | **Digital Nao AI** — the official AI embodiment of Nao Stanton. Trained on 500+ pairs from her book, transcripts, and teachings. Soul type readings, manifestation guidance, Empathy Gap wisdom, and cosmic truth drops in her exact voice. Linked from Campus top nav. |
| `admin.html` | /admin | Admin panel (password protected) |

## Credentials

- **Member demo:** `member@test.com` / `miracle2026`
- **Admin:** `admin@miracle.com` / `miracleadmin2026` (or go direct to admin.html)

## Deploy to GitHub Pages

```bash
# One-time setup (already done for soul-mission-quiz):
gh repo create miracle-university --public --source=. --remote=origin

# Push
git add -A && git commit -m "feat: Miracle University portal v1.0"
git push origin main

# Enable Pages in repo settings → Pages → Source: main branch / root
```

Live at: `https://gomunikagear5.github.io/miracle-university/`

## How Admin Works

1. Go to `admin.html` → enter password `miracleadmin2026`
2. Paste the Zoom meeting link → Save
3. Edit this month's homework → Save
4. Update cohort name/count → Save
5. Generate email template → copy/paste to mailing list

All data saves to localStorage → automatically shows in member dashboards.

## Next Steps (Phase 2)

- [ ] Stripe payment links (replace placeholder hrefs)
- [ ] Zoom API integration (auto-generate meeting links)
- [ ] Real auth backend (Supabase or Firebase)
- [ ] Email delivery via SendGrid/Mailchimp
- [ ] Cohort management with real member database
