# 🚀 Mohammed Alrassas - Portfolio

A modern, interactive portfolio website showcasing my work as a frontend developer. Built with React, TypeScript, and Framer Motion to create smooth, pixel-perfect animations that make every interaction feel intentional and delightful.

**[View Live](https://mohammadportfolio.com)** | **[Project Showcase](#-featured-projects)**

---

## ✨ Features

- **Smooth Scroll Animations** - Letter-by-letter text reveals, parallax effects, and scroll-triggered transitions using Framer Motion
- **Interactive Elements** - Custom mouse cursor, 3D card carousel, and responsive navbar with smooth navigation
- **Fully Responsive** - Mobile-first design that works seamlessly across all devices
- **Performance Optimized** - Locomotive Scroll integration for smooth scrolling experience
- **Modern Tech Stack** - Built with React 18, TypeScript, and Tailwind CSS for maintainability
- **Dark Mode Ready** - DaisyUI theme system with luxury theme as default

---

## 🛠️ Tech Stack

| Technology            | Purpose                              |
| --------------------- | ------------------------------------ |
| **React 18**          | UI framework                         |
| **TypeScript**        | Type safety                          |
| **Tailwind CSS**      | Styling and responsive design        |
| **Framer Motion**     | Advanced animations and interactions |
| **DaisyUI**           | Component library & theming          |
| **Locomotive Scroll** | Smooth scroll experience             |
| **Lucide React**      | Icon library                         |
| **Vite**              | Build tool & dev server              |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutMeCard.tsx          # Reusable card for About Me sections
│   ├── InteractiveBackground.tsx # Mouse-tracking background effect
│   ├── Navbar.tsx               # Navigation bar with smooth transitions
│   ├── ThreeDimensionCard.tsx    # 3D card carousel for contact info
│   └── WorkCard.tsx             # Project showcase cards
├── sections/
│   ├── AboutMe.tsx              # About Me section with scroll animations
│   ├── Contact.tsx              # Contact information carousel
│   ├── FirstTextAnim.tsx        # Opening text reveal animation
│   ├── Footer.tsx               # Footer with links
│   ├── Hero.tsx                 # Hero section with background parallax
│   ├── Introduction.tsx         # Introduction prompt
│   ├── MyProjects.tsx           # Projects showcase section
│   ├── SecondTextAnim.tsx       # "Here's what I've built" text animation
│   └── TextParallax.tsx         # Parallax text background effect
├── App.tsx                       # Main app component
├── index.css                     # Global styles and Tailwind imports
└── main.tsx                      # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Mohammareh/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Featured Projects

### 🎯 **Jobify**

A responsive job board aggregating listings from multiple public APIs with advanced filtering by salary, location, and currency.

- **Live**: [jobify.vercel.app](https://job-filtering-dash-board.vercel.app/)
- **Stack**: React, TypeScript, Tailwind CSS

### 🌐 **Three.js 3D Website**

An interactive 3D web experience showcasing 3D model exploration in a browser environment.

- **Live**: [threejs-3d.vercel.app](https://threejs-3d-taupe.vercel.app/)
- **Stack**: Three.js, React

### ✅ **ToDo App**

A full-stack task management application with real-time updates and persistent backend storage.

- **Live**: [todolist.onrender.com](https://todolist-jx8l.onrender.com/)
- **Stack**: Django, TailwindCSS, JavaScript, HTML

---

## 🎨 Key Components Explained

### **InteractiveBackground**

Custom mouse-tracking cursor that appears on hover. Creates an engaging interactive element without obstructing content.

### **ThreeDimensionCard**

A carousel component displaying contact information (GitHub, Phone, LinkedIn) with 3D perspective animations and keyboard/click navigation.

### **Framer Motion Scroll Animations**

Uses `useScroll`, `useTransform`, and `useMotionValue` hooks to create scroll-progress-based animations:

- Text reveals letter by letter
- Parallax effects
- Scale and opacity transitions

### **Navbar**

Fixed navigation with smooth active state indicator. Responsive design switches between mobile popover menu and desktop navigation.

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

---

### Planned Features

- [ ] Dark/Light mode toggle
- [ ] Blog section with latest articles
- [ ] Email contact form with backend
- [ ] Skill visualization (interactive skill tree)
- [ ] Project filtering by technology
- [ ] Newsletter signup
- [ ] SEO optimization & meta tags

---

## 🎓 What I Learned

Building this portfolio taught me:

- Advanced Framer Motion patterns and scroll-based animations
- Responsive design principles and mobile-first thinking
- TypeScript for type-safe React components
- Smooth scrolling implementations with Locomotive Scroll
- Performance optimization for animation-heavy sites
- Component reusability and clean architecture

---

## 📧 Get in Touch

- **GitHub**: [@Mohammareh](https://github.com/Mohammareh)
- **LinkedIn**: [Mohammed Alrassas](https://www.linkedin.com/in/mohammed-alrassas-1b707341b)
- **WhatsApp**: [+966500812403](https://wa.me/966500812403)

---

## 📄 License

This project is open source and available under the MIT License. Feel free to fork, use, and modify for your own projects.

---

## 🤝 Contributing

If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. I'd love to hear your feedback!

---

## 💖 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for the amazing animation library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for the component library
- [Locomotive Scroll](https://locomotivemtl.com/scroll) for smooth scrolling
- Everyone who visited and gave feedback on my portfolio!

---

**Made with love and Tea ☕ (20% sugar)**

_Last Updated: August 2026_
