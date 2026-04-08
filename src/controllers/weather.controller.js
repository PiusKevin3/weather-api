import { fetchWeather } from "../services/weather.service.js";

export const getWeatherByCity = async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const data = await fetchWeather(city);

    res.json({
      city: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
    });

  } catch (error) {
    next(error);
  }
};