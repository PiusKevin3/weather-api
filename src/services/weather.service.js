import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = process.env.BASE_URL;

  // ✅ fallback if no API key
  if (!apiKey) {
    console.log("⚠️ WEATHER_API_KEY missing, using fallback");
    return {
      name: city,
      main: { temp: 25 },
      weather: [{ description: "clear sky (mocked)" }],
    };
  }

  try {
    // To test fallback, force a wrong URL or invalid key:
    const response = await axios.get(`${baseUrl}/weather`, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric",
      },
      validateStatus: (status) => status < 500, // allow 4xx to pass, will handle manually
    });

    // Manually check for 401/403 or any error status
    if (response.status !== 200) {
      console.warn(`⚠️ External API returned status ${response.status}, using fallback`);
      return {
        name: city,
        main: { temp: 28 },
        weather: [{ description: "partly cloudy (fallback)" }],
      };
    }

    return response.data;

  } catch (error) {
    console.error("🔥 External API failed, using fallback:", error.message);

    return {
      name: city,
      main: { temp: 28 },
      weather: [{ description: "partly cloudy (fallback)" }],
    };
  }
};