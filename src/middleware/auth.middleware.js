const apiKeyAuth = (req, res, next) => {
  const clientKey = req.headers["x-api-key"];

  if (!clientKey) {
    return res.status(401).json({
      error: "API key is missing",
    });
  }

  if (clientKey !== process.env.INTERNAL_API_KEY) {
    return res.status(403).json({
      error: "Unauthorized",
    });
  }

  next();
};

export default apiKeyAuth;