# Payal Halde — Graphic Designer & AI Visual Artist Portfolio Website

A modern, responsive portfolio website with working backend, persistent SQLite database, separate image and video galleries, dark/light theme, and owner-only admin dashboard.

Designed following Payal Halde's resume colors (Navy Blue `#061d36`, Teal `#009688`, and crisp slate/white) and professional details.

---

## 🌟 Key Features

1. **Public Portfolio Sections:**
   - **Hero:** Asymmetric geometric banner matching resume aesthetics, status badge (*Available for Full-time Roles & Freelance*), quick action buttons, and verified contact info.
   - **Career Objective:** Direct quote from Payal's resume, Mumbai base, and languages (Marathi, Hindi, English).
   - **Experience & Education:** 
     - 8 months at **Inteellgorer Software Pvt Ltd** (Canva AI, digital & print media, banners, brochures).
     - Full education table: **T.Y.B.A. (8.53 CGPA, Sathaye College 2025)**, **HSC (2022)**, **SSC (71%, 2020)**.
     - Pursuing Certificate: Graphic Design (GD) from Primezone Computer Classes.
   - **Software & AI Stack:**
     - Software: MS Office, InDesign, Photoshop, Corel Draw, Canva, Illustrator, CapCut, VN, Adobe Express, Clipchamp.
     - AI Tools: ChatGPT, Veo 3, Omni, Grok, Gemini, Lovable, ElevenLabs, Seedance 2.0, Flow.
     - Design Disciplines: AI Tool Knowledge, UGC, CGI Video & Images, Logo Design, Visiting Card, Posters, EDM, Flyer, Thumbnail, Social Media Post, Menu Card, T-Shirt Design, Product Branding Images.

2. **Dedicated Image Gallery:**
   - Category filtering: *All, Brand Identity & Logos, Social Media Creatives, Posters & Flyers, AI-Generated & CGI, Print & Menu Cards, T-Shirt & Merch*.
   - Live search bar by title, keyword, or tag.
   - High-resolution Lightbox modal with zoom, metadata, tags, and download options.

3. **Dedicated Video Gallery:**
   - Category filtering: *All, AI Video, CGI & 3D Visuals, Product Advertisements, Social Media Reels*.
   - Video player modal supporting direct MP4/WebM uploads and YouTube/Vimeo embed streams.

4. **Secure Owner-Only Admin Dashboard:**
   - Secure login screen protected by bcrypt password hashing and JWT authentication.
   - **Upload Media:** Upload image or video files (up to 150MB) or external URLs, select category, add tags, description, custom thumbnail, and mark as featured.
   - **Manage Media:** Edit titles/categories/tags, toggle featured status, or delete items (with disk file cleanup).
   - **Contact Inbox:** View, read, delete, and reply to client inquiries sent via the public contact form.
   - **Security Settings:** Change owner password anytime.

5. **Official Resume Viewer:**
   - One-click modal to inspect and download Payal's official verified resume (`/resume.jpg`).

6. **Dark / Light Mode Toggle:**
   - Navy and teal theme styled for both high-contrast light mode and dark mode.
   - Preferences automatically saved in `localStorage`.

---

## 🔐 Admin Credentials

- **Username:** `admin`
- **Default Password:** `payal@portfolio2026`
*(Password can be updated anytime inside the Admin Dashboard under the "Security" tab)*

---

## 🚀 Getting Started

### 1. Run the Full Application (Backend + Frontend)
From the project directory:
```bash
cd "C:\Users\deepb\.gemini\antigravity\scratch\payal-halde-portfolio"
node server/server.js
```
The server will start on:
👉 **http://localhost:5000**

Both the public portfolio and the admin API are served seamlessly together.

### 2. Frontend Development Mode (Optional)
If you want live Vite hot-reloading:
```bash
cd client
npm run dev
```
Vite dev server will start at:
👉 **http://localhost:3000** (proxied to backend at port 5000)

### 3. Build Frontend for Production
```bash
cd client
npm run build
```

---

## 📁 Project Structure

```
payal-halde-portfolio/
├── data/
│   └── portfolio.db             # Persistent SQLite database (node:sqlite)
├── uploads/                     # Uploaded portfolio media files
├── server/
│   ├── server.js                # Express app entry & static file serving
│   ├── db.js                    # Database setup, tables & automatic seeding
│   ├── middleware/
│   │   └── auth.js              # JWT bearer token verification
│   └── routes/
│       ├── auth.js              # Login, verify, change-password
│       ├── media.js             # Upload, list, update, delete, stats
│       ├── contact.js           # Public contact form & admin inbox
│       └── profile.js           # Profile metadata endpoints
├── client/
│   ├── index.html               # Main HTML with Outfit & Plus Jakarta fonts
│   ├── vite.config.js           # Vite + Tailwind v4 + proxy config
│   ├── src/
│   │   ├── main.jsx             # React DOM root
│   │   ├── App.jsx              # Main App layout & theme controller
│   │   ├── index.css            # Tailwind theme, custom navy/teal palette
│   │   ├── api.js               # Centralized fetch wrapper
│   │   └── components/
│   │       ├── Navbar.jsx       # Responsive header with Dark mode & Admin triggers
│   │       ├── Hero.jsx         # Hero section echoing resume design
│   │       ├── AboutSection.jsx # Objective, location, languages, certificate
│   │       ├── ExperienceEducation.jsx # Work experience & education table
│   │       ├── SkillsTools.jsx  # Software knows, AI tools & competencies
│   │       ├── ImageGallery.jsx # Separate image showcase with lightbox
│   │       ├── VideoGallery.jsx # Separate video showcase with custom player
│   │       ├── ContactSection.jsx # Contact cards & public inquiry form
│   │       ├── AdminDashboard.jsx # Full-featured owner admin hub
│   │       ├── ResumeModal.jsx  # High-res official resume viewer
│   │       └── Footer.jsx       # Footer with quick links & back-to-top
│   └── dist/                    # Compiled production build
└── package.json
```

---

## 🛠️ Technology Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Lucide React icons
- **Backend:** Node.js, Express 5
- **Database:** Native `node:sqlite` (zero native-compilation dependencies, persistent file storage)
- **Authentication:** JSON Web Tokens (JWT) + Bcrypt password hashing
- **Media Storage:** Multer disk storage in `/uploads` with MIME-type validation and size controls
