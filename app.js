
const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./db/database");

const app = express();
connectDb();

app.use(express.json());
app.use("/api/products", productRoutes);


const PORT = 8002;
app.listen(PORT, () => console.log('The application is running on localhost:${PORT}'
));