import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

import weatherRoutes from "./routes/weather.routes.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config();

const app = express(); // ✅ MUST come before using app

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// ✅ Swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/weather", weatherRoutes);

// Health check
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Weather API</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .container {
          max-width: 600px;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .btn {
          display: inline-block;
          padding: 12px 24px;
          font-size: 1rem;
          color: white;
          background: #00c6ff;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          border: none;
          border-radius: 30px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .badge {
          margin-top: 20px;
          font-size: 0.9rem;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🌦 Weather API</h1>
        <p>
          Production-ready API built with Node.js, secured, documented, and deployed on Cloud Run.
        </p>

        <a href="/docs" class="btn">🚀 Explore API Docs</a>

        <div class="badge">
          Built for Build with AI • Cloud Ready • Swagger Enabled
        </div>
      </div>
    </body>
    </html>
  `);
});

// Error handler
app.use(errorHandler);

export default app;