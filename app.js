
const express = require("express");
const products = require("./products");
const app = express();

app.get("/api/products", (request, response) => {
    response.json(products);
});

const PORT = 8002;
app.listen(PORT, () => console.log('The application is running on localhost:${PORT}'

));