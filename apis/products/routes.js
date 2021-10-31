const express = require("express");

const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
  fetchProduct,
} = require("./controllers");

// Param Middleware
router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
  req.product = product;
  next();
  } else {
    const err = new Error("Product Not Found");
    err.status - 404;
    next (err);
  }
});


const router = express.Router();

router.get("/", productListFetch);

router.post("/", productCreate);

router.put("/:productId", productUpdate);

router.delete("/:productId", productDelete);

module.exports = router;
