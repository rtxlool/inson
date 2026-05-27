# Inson Dubois Wood — site revamp

A multi-page revamp of [insonduboiswood.com](https://insonduboiswood.com), with a dark luminous aesthetic inspired by a Moncler fiber-optic puffer and the minimal layout of [mont-fort.com](https://mont-fort.com).

## Pages
- `index.html` — Hero + featured projects
- `projects.html` — Full grid of all 30 projects
- `about.html` — Studio bio + philosophy + press
- `contact.html` — Studio info + inquiry form

## Stack
Plain HTML, CSS, and JavaScript. No build step. CDN-loaded:
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scroll
- [GSAP + ScrollTrigger](https://gsap.com/) — parallax + scroll-driven animation
- Google Fonts — Cormorant Garamond + Inter

## Run locally
Just open `index.html` in a browser. No server required.

## Re-download project photos
```powershell
./download_images.ps1
```
