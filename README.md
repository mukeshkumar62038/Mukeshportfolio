# 🚀 Mukesh - Modern Web Developer Portfolio (React)

A stunning, ultra-modern developer portfolio website built with **React** & **Vanilla CSS**, featuring the signature dark luxury neumorphic design (inspired by Inbio), glowing neon crimson accents, smooth animations, and full **Vercel** deployment readiness.

---

## 🌟 Key Highlights

- **Aesthetic Design**: Dark theme (`#212428`), smooth neumorphic card elevation, glowing gradients (`#ff014f`), and ambient light blurs.
- **Hero Section**: Dynamic typing effect, social links, skill indicators, and a floating badge portrait card.
- **About Me**: Professional biography, experience metrics, and direct CV download trigger.
- **Interactive Skills**: Filterable skills by category (Frontend, Backend, Database) with animated proficiency progress meters.
- **Services (What I Do)**: 6 structured cards with custom icons and hover arrow micro-interactions.
- **My Best Work**: Showcase featuring the Indian Cuisine Food Delivery project (matching the PDF design) + interactive case study modal preview.
- **Trusted Clients**: Partner logo showcase with hover elevation.
- **Contact Form**: Interactive form with real-time validation, responsive fields, and celebratory confetti animation upon sending.
- **100% Responsive**: Looks pixel-perfect on mobile phones, tablets, laptops, and ultra-wide screens.

---

## 📁 Image Replacement Structure (`public/images/`)

Aap apni real photos aur screenshots ko direct replace kar sakte hain bina kisi code ko chhede!

Folder location: **`public/images/`**

| Image File Name | Kaha Use Hota Hai | Recommended Size |
| :--- | :--- | :--- |
| `hero-avatar.jpg` | Hero Section (Top main photo) | 600 x 800 px (Portrait) |
| `about-avatar.jpg` | About Me section photo | 600 x 800 px (Portrait) |
| `projects/project-1.jpg` | Best Work Featured Mockup | 800 x 600 px |
| `projects/project-2.jpg` | E-Commerce Project Thumbnail | 800 x 600 px |
| `projects/project-3.jpg` | Agency Project Thumbnail | 800 x 600 px |
| `projects/project-4.jpg` | SaaS Dashboard Thumbnail | 800 x 600 px |
| `Mukesh_Resume.pdf` | Download CV button file | PDF format |

> **Note**: Default high-quality studio photos and project mockups are already included so your website looks 100% complete and ready to show right now!

---

## ⚙️ Content Customization

Apna name, phone number, email, social links, aur bio update karne ke liye sirf ek file open karein:
👉 **`src/data/portfolioData.js`**

Is file me sabhi text organized hai:
- `personalInfo` (Name, Role, Tagline, Phone, Email, Location)
- `skillsData` (Skills list, percentages, categories)
- `servicesData` (Services titles and descriptions)
- `projectsData` (Project titles, tags, live links, github links)
- `clientsData` (Client companies and names)

---

## 💻 Local Development

### 1. Dependencies Install karein:
```bash
npm install
```

### 2. Local Dev Server Start karein:
```bash
npm run dev
```
Browser me `http://localhost:5173` open karke dekhein!

### 3. Production Build check karne ke liye:
```bash
npm run build
```

---

## 🌐 Vercel Par Deploy Kaise Karein (Step-by-Step)

Is project me **`vercel.json`** pehle se configured hai, isliye Vercel par deployment super-easy hai!

### Tarika 1: GitHub ke jariye (Sabse Best & Recommended)
1. Is portfolio folder ko apne GitHub account par push kar dijiye:
   ```bash
   git init
   git add .
   git commit -m "Mukesh Modern Portfolio Initial Commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mukesh-portfolio.git
   git push -u origin main
   ```
2. [Vercel](https://vercel.com) par login karein.
3. **"Add New..."** -> **"Project"** par click karein.
4. Apna GitHub repository `mukesh-portfolio` select karein.
5. Framework Preset me **Vite** automatically detect ho jayega.
6. **"Deploy"** button par click karein!
7. 1 minute me aapka portfolio live ho jayega aur aapko free `mukesh-portfolio.vercel.app` link mil jayega!

### Tarika 2: Vercel CLI ke jariye
Agar aap command line se deploy karna chahte hain:
```bash
npx vercel
```
Screen par diye instructions follow karein (Login -> Yes -> Deploy).

---

## 🛠️ Tech Stack

- **Framework**: React 19 / Vite
- **Styling**: Pure Modern CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Neumorphism)
- **Icons**: Lucide React + Custom Inline SVG Brand Badges
- **Effects**: Canvas Confetti, Typing Animation, Hover Glows
- **Deployment**: Vercel Ready (`vercel.json`)
# Mukeshportfolio
# Mukeshportfolio
