# 🌦 Weather API (Cloud Run Ready)

A **production-ready Weather API** built with Node.js, secured with API keys, documented using Swagger, and deployable to Google Cloud Run with CI/CD.

---

## 🚀 Features

* 🌦 Fetch real-time weather by city
* 🔐 API Key Authentication
* 📄 Swagger API Documentation (`/docs`)
* ⚡ Rate limiting & security middleware
* ☁️ Cloud Run deployment ready
* 🔁 Fallback mechanism (mock data if external API fails)

---

## 📁 Project Structure

```
weather-api/
│── src/
│   ├── app.js
│   ├── config/
│   │    └── swagger.js
│   ├── routes/
│   │    └── weather.routes.js
│   ├── controllers/
│   │    └── weather.controller.js
│   ├── services/
│   │    └── weather.service.js
│   ├── middleware/
│   │    ├── auth.middleware.js
│   │    └── error.middleware.js
│── .env.example
│── package.json
│── index.js
```

---

## ⚙️ Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/PiusKevin3/weather-api.git
cd weather-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env
```

Update `.env`:

```
PORT=8080
WEATHER_API_KEY=your_openweather_api_key
BASE_URL=https://api.openweathermap.org/data/2.5
INTERNAL_API_KEY=my_super_secret_key
SWAGGER_SERVER_URL=https://your-url.com
```

---

### 4. Run the Server

```bash
npm start
```

App runs at:

```
http://localhost:8080
```

---

## 🌐 API Endpoints

### 🔹 Health / Landing Page

```
GET /
```

---

### 🔹 Get Weather by City

```
GET /api/weather?city=Kampala
```

---

## 🔐 Authentication

All protected endpoints require:

```
Header:
x-api-key: your_internal_api_key
```

---

## 📄 API Documentation (Swagger)

Open:

```
http://localhost:8080/docs
```

* Interactive API testing
* Built-in authentication support
* Works locally and in production

---

## 🧪 Example Request

```bash
curl -X GET "http://localhost:8080/api/weather?city=Kampala" \
  -H "x-api-key: my_super_secret_key"
```

---

## 🔁 Fallback Behavior

If the external weather API fails or no API key is provided:

```
{
  "city": "Kampala",
  "temperature": 28,
  "weather": "partly cloudy (fallback)"
}
```

---

## ☁️ Deploy to Cloud Run (via GitHub)

This project supports **continuous deployment from GitHub using Cloud Build**.

---

### 1. Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

---

### 2. Connect Repository to Cloud Run

1. Go to **Google Cloud Console → Cloud Run**
2. Click **"Connect Repository"**
3. Set up **Cloud Build**
4. Select your GitHub repository
5. Choose:

   * Build Type → **Cloud Buildpacks**
6. Click **Save**

---

### 3. Deploy Service

* Service name → auto-filled
* Region → choose (e.g. `europe-west1`)
* Authentication → **Allow public access**

Click **Create**

---

### 4. Set Environment Variables

In Cloud Run → Service → **Variables & Secrets**

Add:

```
WEATHER_API_KEY=your_openweather_api_key
BASE_URL=https://api.openweathermap.org/data/2.5
INTERNAL_API_KEY=my_super_secret_key
SWAGGER_SERVER_URL=https://your-url.com
```

---

### 5. Access Your API

```
https://your-cloud-run-url/
https://your-cloud-run-url/docs
```

---

## 🔄 Continuous Deployment

Every push to `main` branch:

```
git add .
git commit -m "update"
git push
```

👉 Automatically triggers:

* Cloud Build
* New deployment on Cloud Run

---

## 🔐 Security Best Practices

* Never commit `.env`
* Use environment variables in production
* Rotate API keys regularly
* Use Secret Manager for sensitive data

---

## 🧠 Tech Stack

* Node.js + Express
* Axios (HTTP client)
* Swagger (API docs)
* Google Cloud Run
* Cloud Build (CI/CD)

---

## 🎤 Key Talking Points

* “We built a production-ready API, not just a demo.”
* “It’s secured, documented, and cloud-deployed.”
* “Any developer can test it instantly via Swagger.”
* “CI/CD ensures automatic deployment on every push.”

---

## 📌 License

MIT License

---

## ✨ Author

**Pius Kevin Mafabi**
Software Engineer & Google Developer Expert
