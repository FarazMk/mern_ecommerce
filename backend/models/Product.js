const mongoose = require("mongoose");
const slugify = require("slugify");

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    image: {
      type: [String],
      required: [true, "Please add images"],
    },
    sub: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    reviews: [ReviewSchema],
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    colors: {
      type: [String],
      required: [true, "Please add a color"],
    },
    size: {
      type: [String],
      required: [true, "Please add a size"],
    },
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
  },
  { timestamps: true }
);

// Create slug from name before saving to database
ProductSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Product", ProductSchema);
