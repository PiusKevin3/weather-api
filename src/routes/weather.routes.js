import express from "express";
import { getWeatherByCity } from "../controllers/weather.controller.js";
import apiKeyAuth from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect this route
/**
 * @swagger
 * /api/weather:
 *   get:
 *     summary: Get weather by city
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the city
 *     responses:
 *       200:
 *         description: Weather data retrieved successfully
 *       400:
 *         description: City is required
 *       403:
 *         description: Unauthorized
 */
router.get("/", apiKeyAuth, getWeatherByCity);

export default router;