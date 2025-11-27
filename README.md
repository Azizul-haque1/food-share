
# 🥗 Food Share

Food Share is a simple food-sharing application built using **Next.js (App Router)**, **NextAuth.js**, and an **Express.js backend**.
Users can browse foods, view details, and after logging in, add and manage foods.

---

## 🚀 Live Link
[https://your-frontend.vercel.app]


---

## 🔑 Features

* Landing page with multiple sections
* Google + Credentials login (NextAuth)
* Food list and details pages
* Protected routes:

  * **Add Food**
  * **Manage Foods**
* Responsive UI with clean layout
* Express.js backend with MongoDB

---

## ⚙ Installation

### 1. Clone repo

```bash
git clone https://github.com/yourusername/food-share.git
cd food-share
```

### 2. Install frontend deps

```bash
npm install
```

### 3. Add `.env.local`

```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 4. Start frontend

```bash
npm run dev
```


---

## 📄 Routes Overview

### Public

* `/` – Home
* `/foods` – Food list
* `/foods/[id]` – Food details
* `/login`
* `/register`

### Protected

* `/add-food`
* `/manage-foods`

---

## 🛠 Tech

* Next.js (App Router)
* NextAuth.js
* Express.js
* MongoDB native driver
* Tailwind CSS

---