# EZ Labs Frontend Assignment — Varnan Website

This project is built as part of the **EZ Labs Frontend Assignment (EZASSIGNMENT)**.
It’s a **single-page responsive web application** built using **React (Vite)** and **Tailwind CSS**, recreating the provided **Figma design** with a fully functional **contact form** integrated with the provided API endpoint.

---

## 🔗 Live Demo

🔗 [View Deployed App](https://notliveyet.com)

---

## 🎯 Objective

# EZ Labs Frontend Assignment — Varnan Website

This project was built as part of the **EZ Labs Frontend Assignment (EZASSIGNMENT)**.
It’s a **responsive single-page web application** built with **React (Vite)** and **Tailwind CSS**, recreating the provided **Figma design**, including a fully functional **contact form** integrated with the provided API endpoint.

---

## 🔗 Live Demo

🔗 [View Deployed App](https://notliveyet.com)

---

## 🎯 Objective

The goal of this assignment is to:
- Recreate the **Home Page** from the [Figma reference](https://www.figma.com/design/1EUuNvrVUVWuYkTG0OmpMj/EZ-Labs-Assignment?node-id=0-1&t=WoUIFHGYARdd1lg0-1)
- Implement a **responsive layout** across mobile, tablet, and desktop
- Build and validate a **contact form** integrated with the backend API
- Showcase clean design, frontend logic, and validation handling

---

## 🛠️ Tech Stack

- ⚛️ **React (Vite)**
- 💨 **Tailwind CSS** (v4 with `@tailwindcss/vite`)
- 🧠 **React Toastify** for form feedback
- 🔁 **Responsive Design** for mobile, tablet, and large screens

---

## ▶️ Getting Started

From the project root, install dependencies and start the dev server.

```pwsh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧱 Folder Structure

```text
📦 Ezassignment/
┣ 📂 public/
┣ 📂 src/
┃ ┣ 📂 assets/
┃ ┣ 📂 components/
┃ ┣ 📂 pages/
┃ ┣ 📂 servicesComponents/
┃ ┣ 📜 App.jsx
┃ ┣ 📜 main.jsx
┃ ┗ 📜 index.css
┣ � index.html
┣ 📜 package.json
┣ � vite.config.js
┣ � eslint.config.js
┗ � README.md
```

---

## 🧠 Features Implemented

### 🎨 Frontend & Design
- Recreation of the provided Figma design
- Fully **responsive layout** for mobile, tablet, laptop, and large displays
- Clean and consistent typography using:
  - `Instrument Sans`
  - `Halant`
  - `Island Moments`

### ✉️ Contact Form Functionality
- Integrated with the given backend API endpoint
- Client-side validation and feedback via Toasts

---

## 🔗 API Information

### 📬 Endpoint

```text
POST https://vernanbackend.ezlab.in/api/contact-us/
```

### 📦 Request Body Example

```json
{
  "email": "hsatyamrav@gmail.com",
  "message": "kjhgcgj",
  "name": "Amit",
  "phone": ""
}
```

### ✅ Expected Response (201 Created)

```json
{
  "message": "Contact request submitted and email sent successfully",
  "data": {
    "id": 4114,
    "name": "Amit",
    "email": "hsatyamrav@gmail.com",
    "phone": "",
    "message": "kjhgcgj",
    "created_at": "2025-11-09T07:41:09.037080Z",
    "updated_at": "2025-11-09T07:41:09.037097Z"
  }
}
```

### 📮 Postman Collection
The API testing and validation are documented in the following Postman collection.

🔗 [View API Collection on Postman](https://www.postman.com/abhi9953/workspace/ezassignment/request/38967340-a2a90a54-6af3-4376-be0a-ecfbc4d2c475?action=share&creator=38967340&ctx=documentation)

---

## 📌 Notes
- This project uses **Tailwind CSS v4** with the official Vite plugin; styles are defined in `src/index.css` and via utility classes in components.
- The app is designed and tested primarily for modern Chromium-based browsers.

