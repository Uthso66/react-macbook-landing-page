# 💻✨ MacBook Pro M4 Landing Page — Next.js + R3F + GSAP

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=next.js\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge\&logo=three.js\&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge\&logo=greensock\&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge\&logo=tailwind-css\&logoColor=38BDF8)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

A **high-fidelity, motion-heavy product landing page** inspired by Apple’s MacBook Pro experience.
Built with **Next.js**, **React Three Fiber**, and **GSAP**, this project intentionally leans into **3D, scroll-driven storytelling, and state-synced interaction**.

This is where I stopped thinking in “pages” and started thinking in **scenes**.

👉 **Live Demo**
[View Live Site](https://react-macbook-landing-page.vercel.app/)

---

## 🚀 Key Engineering Features 
* 💻 **Real-Time 3D Product Rendering:** Interactive MacBook model rendered with **React Three Fiber**, fully integrated into the React lifecycle.
* 🎛️ **State → 3D Pipeline:** Global state (colors, sizes, screen content) managed via **Zustand**, driving real-time material and scale updates.
* 📺 **Scroll-Synced Video Textures:** Video content mapped onto the MacBook screen and swapped precisely using GSAP `.call()` hooks.
* 🎢 **Advanced Scroll Orchestration:** GSAP ScrollTrigger used for pinning, parallax scattering, and narrative pacing.
* 💡 **Studio-Grade Lighting:** Environment maps and lightformers for sharp rim lighting and metallic reflections.
* 📱 **Adaptive Experience:** Responsive logic that adjusts scene complexity for mobile GPUs without killing the vibe.

---

## 🧱 Tech Stack

| Layer          | Technology                   |
|----------------|------------------------------|
| **Framework**  | Next.js 15 / React 19        |
| **3D**         | React Three Fiber (Three.js) |
| **Animation**  | GSAP (ScrollTrigger)         |
| **State**      | Zustand                      |
| **Styling**    | Tailwind CSS v4              |
| **Responsive** | React Responsive             |
| **Hosting**    | Vercel                       |

---

## 🎯 Why This Project Exists 

I built this project to:

* Push beyond “cool animations” into **spatial, state-driven UI**
* Learn how to **safely synchronize React state with WebGL**
* Explore **scroll as a storytelling mechanism**, not just navigation
* Stress-test performance when **3D + video + motion** collide

There’s no backend here on purpose.
This project is about **interaction quality**, **technical restraint**, and **engineering taste** — the stuff that separates flashy demos from real product work.

---

## 🎞️ Animation & Motion Breakdown 

The motion isn’t decorative — it’s structural.

### 🟢 Scroll-Driven Storytelling

* **Pinning:** The MacBook stays locked in space while the narrative scrolls around it.
* **Parallax Scattering:** Performance visuals animate from chaotic offsets into a clean, assembled layout.
* **SVG Masking:** The M4 chip reveal uses an SVG logo as a live video mask (because flat fades are boring).

### 🟢 3D Scene Control

* **360° Rotation:** The MacBook completes a full rotation exactly as the feature list concludes.
* **Eased Transitions:** All rotations and camera shifts use carefully tuned GSAP easing to avoid robotic motion.

---

## ⚖️ Challenges & Trade-offs (the stuff recruiters actually care about)

### 🎯 Performance vs Visual Fidelity

Running **high-res video textures inside a 3D scene** is expensive.

**Decision:**
Reuse and preload video textures instead of recreating materials on scroll.

**Trade-off:**
More complex logic, but smooth playback and stable frame rates.

---

### 🎯 Scroll Precision vs Responsiveness

Scroll-based timelines can break across screen sizes.

**Decision:**
Anchor animations to **normalized scroll progress**, not raw pixel values.

**Trade-off:**
Extra planning upfront, but predictable motion on all devices.

---

### 🎯 React Abstraction vs Low-Level Control

Pure Three.js gives control, but React gives structure.

**Decision:**
Use **R3F for declarative structure**, drop to refs only where precision is required.

**Trade-off:**
Slight learning curve, massive long-term maintainability win.

---

### 🎯 Mobile Experience vs Scene Complexity

Mobile GPUs are not your friends.

**Decision:**
Reduce lighting intensity and scene complexity on smaller viewports.

**Trade-off:**
Slight visual downgrade on mobile — massive stability and battery savings.

---

## 💻 Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Uthso66/react-macbook-landing-page.git
cd react-macbook-landing-page
```

### 2️⃣ Install dependencies & run

```bash
npm install
npm run dev
```

Runs locally at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧪 Notes

* Frontend-focused by intention
* No backend or APIs
* Heavy emphasis on motion, 3D, and interaction design
* Best viewed as a **creative engineering case study**, not a CRUD app

---

## 🧔 Author

**Uthso**
*Software QA Engineer • Security Enthusiast • AI/ML Hobbyist*

🐙 GitHub: [https://github.com/Uthso66](https://github.com/Uthso66)
💼 LinkedIn: [https://www.linkedin.com/in/tarikul-islam-uthso/](https://www.linkedin.com/in/tarikul-islam-uthso/)

---

## 🪄 License

MIT License © 2025 Uthso
