const Product = require("../models/Product");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// @desc      Get all products for a sub
// @rotue     GET /api/products/:catslug/:subslug
// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({ sub: req.params.subslug });

  if (!products) {
    return next(
      new ErrorResponse(`No products found for ${req.params.subslug}`, 404)
    );
  }

  res.status(200).json({
    sucess: true,
    count: products.length,
    products,
  });
});

// @desc      Create a new product
// @rotue     POST /api/products
// @access    Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  if (!product) {
    return next(new ErrorResponse(`Unable to create new product`, 400));
  }

  res.status(201).json({
    success: true,
    product,
  });
});

// @desc      Get a specific product
// @rotue     GET /api/products/:productId
// @access    Public
exports.getSingleProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product) {
    return next(
      new ErrorResponse(
        `No product found with the id of ${req.params.productId}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// @desc      Update product
// @rotue     PUT /api/products/:productId
// @access    Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.productId);

  if (!product) {
    return next(
      new ErrorResponse(
        `No product found with the id of ${req.params.productId}`,
        404
      )
    );
  }

  product = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// @desc      Delete product
// @rotue     DELETE /api/products/:productId
// @access    Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product) {
    return next(
      new ErrorResponse(
        `No product found with the id of ${req.params.productId}`,
        404
      )
    );
  }

  product.remove();

  res.status(200).json({
    success: true,
    product: {},
  });
});
