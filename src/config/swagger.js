import swaggerJsdoc from "swagger-jsdoc";

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
        // ✅ Empty string = auto-detect current host (works for local + Cloud Run)
        url: "",
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
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

// ✅ Generate swagger spec
const swaggerSpec = swaggerJsdoc(options);

// ✅ IMPORTANT: Default export (this fixes your crash)
export default swaggerSpec;