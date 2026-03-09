# Atomity Frontend Engineering Challenge

## Live Demo

https://atomity-frontend-orcin.vercel.app/

## GitHub Repository

https://github.com/SaloniSsSaini/atomity-frontend

---

# Overview

This project is my implementation of the **Atomity Frontend Engineering Challenge**.

The objective of the challenge was to recreate an animated product feature inspired by Atomity’s cloud optimization platform. Instead of copying the product video exactly, the goal was to **interpret the concept and build a creative, interactive UI section** demonstrating cloud infrastructure monitoring.

The project focuses on:

• animation craftsmanship
• modern frontend architecture
• reusable component structure
• API integration and caching
• responsive SaaS-style UI design

---

# Feature Chosen

I implemented a **Cloud Infrastructure Network Visualization** inspired by the feature shown in the Atomity product video.

The section demonstrates how different cloud providers connect to the Atomity platform.

The feature includes:

• cloud provider nodes (AWS, Azure, Google Cloud, On-Prem)
• animated network connections
• moving data flow particles
• floating cloud nodes
• a central Atomity platform node

This visualizes how Atomity aggregates infrastructure data from multiple providers.

---

# Key Features

### 1. Hero Section

A SaaS-style hero section introduces the platform.

Features:

• animated gradient heading
• entrance animation using Framer Motion
• responsive typography using `clamp()`
• call-to-action buttons

---

### 2. Cloud Infrastructure Network

The core visual feature of the project.

Features:

• animated network diagram using SVG
• floating cloud provider nodes
• animated data flow particles
• hover interactions on nodes
• glowing central platform node

Animations are implemented using **Framer Motion** and SVG animations.

---

### 3. Optimization Dashboard

The dashboard displays cloud optimization metrics.

Features:

• KPI metric cards
• number count-up animation
• data fetched from a public API
• responsive card layout

The dashboard demonstrates how Atomity might visualize optimization metrics.

---

### 4. Scroll Progress Indicator

A scroll progress bar is implemented at the top of the page.

This provides a visual indicator of scroll position and enhances the overall user experience.

---

### 5. Dark Mode Support

The UI supports both **light mode and dark mode**.

Theme switching is implemented using **CSS variables (design tokens)**.

The toggle dynamically switches between themes without reloading the page.

---

### 6. Glassmorphism UI

Cards and nodes use a **glassmorphism visual style**.

This includes:

• translucent backgrounds
• backdrop blur effects
• soft shadows
• subtle borders

This style is commonly used in modern SaaS interfaces.

---

# Tech Stack

The project was built using the following technologies.

### Frontend Framework

React + TypeScript

### Build Tool

Vite

### Animation Library

Framer Motion

### Data Fetching

TanStack React Query

### Styling

CSS variables and custom styles

---

# Component Architecture

The project follows a modular component structure.

```
src/

components/
Hero.tsx
CloudArchitecture.tsx
CloudNode.tsx
MetricCard.tsx
OptimizationDashboard.tsx
CTA.tsx
ScrollProgress.tsx
DarkModeToggle.tsx

hooks/
useApiData.ts

styles/
globals.css

main.tsx
tokens.ts
```

Each UI element is implemented as a **custom component**, without using prebuilt UI libraries.

---

# Data Fetching

Cloud optimization metrics are fetched from a public API.

API used:

https://dummyjson.com

The API data is used to dynamically render dashboard metric cards.

---

# Caching Strategy

Data fetching is implemented using **TanStack React Query**.

React Query provides:

• automatic caching
• background refetching
• loading and error states
• optimized API requests

This ensures the API is not re-requested unnecessarily.

---

# Animation Approach

Animations were implemented using **Framer Motion**.

Examples include:

• scroll-triggered entrance animations
• floating cloud nodes
• hover micro-interactions
• animated SVG connection paths
• number count-up animations

The goal was to create animations that feel **smooth, natural, and intentional**.

---

# Styling Approach

The project uses a **design token system** based on CSS variables.

Example tokens:

```
--color-bg
--color-text
--color-primary
```

Benefits of this approach:

• consistent styling across components
• easier theme switching
• cleaner component code

---

# Responsiveness

The layout is responsive across:

• desktop screens (1280px+)
• tablets (768px)
• mobile devices (375px)

Responsive techniques used include:

• CSS grid layouts
• flexible containers
• `clamp()` for fluid typography

---

# Accessibility Considerations

Basic accessibility practices were followed.

These include:

• semantic HTML elements (`section`, `h1`, `h2`)
• readable color contrast
• accessible button interactions

---

# Deployment

The project is deployed using **Vercel**.

Deployment steps:

1. Push project to GitHub
2. Import repository into Vercel
3. Configure build settings for Vite
4. Deploy project

---

# Tradeoffs and Decisions

Some design decisions were made to keep the implementation focused.

For example:

• using a simple API instead of real cloud metrics
• focusing on animation quality rather than building a full dashboard system

The goal was to demonstrate **frontend architecture and interaction design**.

---

# Future Improvements

With additional time, the following improvements could be added:

• interactive cloud cost charts
• advanced network visualization using WebGL
• more detailed infrastructure metrics
• advanced hover interactions
• improved performance optimizations

---

# Author

Saloni Saini
