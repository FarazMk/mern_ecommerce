const Sub = require("../models/Sub");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// @desc      Get all the subs
// @rotue     GET /api/sub
// @access    Public
exports.getSubs = asyncHandler(async (req, res, next) => {
  const subs = await Sub.find();

  if (!subs) {
    return next(new ErrorResponse(`No subs found`, 404));
  }

  res.status(200).json({
    success: true,
    subs,
  });
});

// @desc      Create a sub
// @rotue     POST /api/sub
// @access    Private
exports.createSub = asyncHandler(async (req, res, next) => {
  const sub = await Sub.create(req.body);

  if (!sub) {
    return next(new ErrorResponse(`Unable to create sub`, 400));
  }

  res.status(201).json({
    success: true,
    sub,
  });
});

// @desc      Delete a sub
// @rotue     DELETE /api/sub/:subId
// @access    Private
exports.deleteSub = asyncHandler(async (req, res, next) => {
  const sub = await Sub.findById(req.params.subId);

  if (!sub) {
    return next(
      new ErrorResponse(
        `No sub category found with the id of ${req.params.subId}`,
        404
      )
    );
  }

  sub.remove();

  res.status(200).json({ success: true });
});
