# 🚀 GrowthPro – Business Review & Headline Generator

GrowthPro is a full-stack web application that takes a **business name and location**, fetches its rating & reviews, and then **generates a catchy headline** using AI. Users can also regenerate the headline with a click.

### 🔧 Tech Stack

- **Frontend**: React, Bootstrap, Axios, React Spinners
- **Backend**: Node.js, Express.js
- **Deployment**: 
  - Frontend → Vercel  
  - Backend → Render

---

## 🌐 Live URLs

- **Frontend**:  https://growth-pro-mauve.vercel.app/
- **Backend API**: https://growthpro-dawu.onrender.com

---

## 📦 Features

- Submit a business name + location
- View:
  - ⭐️ Rating
  - 📝 Reviews
  - 🎯 Generated headline
- Regenerate headline on demand
- Loading spinners and disabled buttons during network calls

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/saitejamandadi99/GrowthPro
cd GrowthPro
cd backend
npm install
npm start
cd ../frontend
npm install
npm run dev
```
POST /api/business-data
Request
```bash
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```
Response
```bash
{
  "business": {
    "rating": 4.5,
    "reviews": 132,
    "headline": "Delicious Cakes in Mumbai!"
  }
}
```
