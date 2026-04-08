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
  res.send("Weather API is running 🚀");
});

// Error handler
app.use(errorHandler);

export default app;