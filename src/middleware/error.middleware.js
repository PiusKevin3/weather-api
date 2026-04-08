const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERROR:", err.response?.data || err.message);

  res.status(500).json({
    error: "Something went wrong",
    details: err.response?.data || err.message, // 👈 add this for debugging
  });
};

export default errorHandler;