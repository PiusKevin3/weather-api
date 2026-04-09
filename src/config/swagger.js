const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      version: "1.0.0",
      description: "Production-ready Weather API with Node.js & Cloud Run",
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || ""
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },
    },
    security: [{ ApiKeyAuth: [] }],
  },
  apis: ["./src/routes/*.js"],
};