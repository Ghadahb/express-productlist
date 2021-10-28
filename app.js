const express = require("express");
const productRoutes = require("./apis/products/routes");
const morgan = require("morgan");
const { request } = require("express");
const connectDB = require("./db/database");

const app = express();

// (2) Used morgan
app.use(morgan("dev"));
// (1) Logger Middleware
app.use((request, response, next) => {
  console.log(
    '${request.method} ${request.protocol}://${request.get("host")}${request.originalUrl}'
  );
  next();
});

app.use(express.json());

// Error Handling Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error." });
});

// Routes
app.use("/api/products", productRoutes);

// Not Found Middleware
app.use((request, response, next) => {
  response.status(404).json({ message: "Path Not Found." });
});

connectDB();

const PORT = 8002;
app.listen(PORT, () =>
  console.log("The application is running on localhost:${PORT}")
);
