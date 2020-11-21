const Category = require("../models/Category");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// @desc      Get all the categories
// @rotue     GET /api/category
// @access    Public
exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({});

  if (!categories) {
    return next(new ErrorResponse(`No categories could be found`, 404));
  }

  res.status(200).json({
    success: true,
    categories,
  });
});

// @desc      Create a new category
// @rotue     POST /api/category
// @access    Private
exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);

  if (!category) {
    return next(new ErrorResponse(`Category not created`, 400));
  }

  res.status(201).json({
    success: true,
    category,
  });
});

// @desc      Delete a category
// @rotue     DELETE /api/category/:categoryId
// @access    Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.categoryId);

  if (!category) {
    return next(new ErrorResponse(`Category not found`, 404));
  }

  await category.remove();

  res.status(200).json({ success: true });
});
