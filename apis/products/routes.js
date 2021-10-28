const express = require("express");

const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");

const router = express.Router();

router.get("/", productListFetch);

router.post("/", productCreate);

router.put("/:productId", productUpdate);

router.delete("/:productId", productDelete);

module.exports = router;
