# Weather API (Cloud Run Ready)

## 🚀 Setup

1. Clone the repo
```bash
git clone <your-repo-url>
cd weather-api

Install dependencies
npm install
Create .env
cp .env.example .env

Add your API key (OpenWeather)
Run locally
npm start


🔐 Authentication

All requests require:

Header:

x-api-key: your_internal_api_key
🌦 Example Request
GET /api/weather?city=Kampala
☁️ Deploy to Cloud Run
gcloud run deploy weather-api --source .