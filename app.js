
const express = require("express");
let products = require("./products");
const app = express();

app.use(express.json());

app.get("/api/products", (request, response) => {
    return response.json(products);
});

app.post("/api/products", (request, response) => {
    products.push(request.body);
    response.status(201);
    return response.json(request.body);


});

app.delete("/api/products/:productId", (request, response) => {
    const productId = request.params.productId
    const product = products.find(product => product.id === +productId)
    if (product){
        products = products.filter(product => product.id !== +productId);
        response.status(204);
        return response.end();
    } else {
        return response.status(404).json({ message: "product not found" });
    }
});


const PORT = 8002;

app.listen(PORT, () => console.log('The application is running on localhost:${PORT}'

));