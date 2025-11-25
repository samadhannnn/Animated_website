README

Overview

This project is a handcrafted recreation of the K72 digital agency experience — rebuilt with React and shaped with GSAP for that smooth storytelling motion.
Every scroll, every fade, every pinned frame leans on classic craft, but expressed with a fresh, easygoing energy.

 Project Structure

Your project follows a simple and intentional layout:K72-MAIN
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   │   ├── Agence.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
Everything sits in calm order — no clutter, no noise.

 Animations (GSAP + ScrollTrigger)

This clone heavily uses GSAP, especially for the Agence page — the heart of the scroll-driven storytelling.

Key animation features:
	•	Pinned image section while scrolling
	•	Smooth image transitions based on scroll progress
	•	Clean, controlled scrubbing for fluid movement
	•	ScrollTrigger used for timeline orchestration

Inside Agence.jsx, GSAP locks the image container in place and swaps portraits as the user scrolls — just like the original site’s team reveal.

Tech Stack
	•	React (Vite) — fast and lightweight
	•	GSAP + ScrollTrigger — motion backbone
	•	Tailwind CSS — styling with elegance
	•	JavaScript (ES6) — clean logic

 Getting Started

Clone the repo:
git clone <your-repo-url>
cd K72-MAIN
Install dependencies: npm install
Run dev server: npm run dev
 Pages

Home.jsx

Serves as the landing experience — bold, minimalist, confident.

Projects.jsx

Showcases work with motion, layout, and storytelling.

Agence.jsx

A scroll-anchored narrative where an image morphs through team members while text and typography hold the frame.

This page carries the strongest GSAP presence.
 Notes
	•	The project stays true to the original layout style.
	•	Animations are intentionally smooth, not flashy.
	•	Components remain modular so future pages can be added easily.
