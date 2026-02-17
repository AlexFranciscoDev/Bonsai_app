# 🌿 Bonsai Pricing Page Clone

A responsive pricing/landing page made from one of the challenges from the website [Frontend practice] (https://www.frontendpractice.com/projects/bonsai), built to practice component-based UI development, SCSS architecture, and interactive UI patterns in React.

---

## 🛠 Technologies

- React (Create React App)
- SCSS / SASS
- Boxicons
- React Testing Library (included in the setup)

---

## ✨ Features

- Responsive navbar with mobile hamburger menu
- Pricing plans section with **Monthly / Yearly** toggle
- “Most Popular” ribbon for highlighted plan
- Add-ons section layout
- FAQs section with custom accordion component
- Footer with multiple link sections

---

## 🧩 The Process

This project was built as a UI-focused clone with an emphasis on clean component separation:

- **Reusable components** (Navbar, Pricing, Plan, Addons, Accordion, Footer)
- UI interactivity handled with small, focused state:
  - Pricing toggle using `useState`
  - Accordion open/close behavior with `useState` + `useRef`
- Styles organized with SCSS partials and a shared variables file to keep consistency across the UI

---

## 📚 What I Learned

- Building responsive navigation patterns (hamburger menu)
- Structuring a small React UI project using reusable components
- Managing UI state (toggles, accordions) in a and readable way
- Organizing SCSS with partials and shared variables for scalability
- Use of `useState` + `useRef`

---

## 🔮 Improvements

- Add a real routing flow (e.g., Pricing, Templates, Reviews pages)
- Improve accessibility (ARIA attributes for accordion and menu)
- Add unit tests for key UI components (Pricing toggle, Accordion behavior)

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone https://github.com/AlexFranciscoDev/Bonsai_app.git
```

Install dependencies:

```
npm install
```
Run the app locally:
```
npm start
```
The app will be available at:
http://localhost:3000

## 🎥 Preview

![Bonsai Demo](https://github.com/AlexFranciscoDev/Bonsai_app/blob/main/preview/Bonsai-app.gif)

