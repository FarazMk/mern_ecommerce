const express = require("express");
const {
  getProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").post(createProduct);

router
  .route("/:productId")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/:catslug/:subslug").get(getProducts);

module.exports = router;
