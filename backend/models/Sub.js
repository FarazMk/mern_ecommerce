const mongoose = require("mongoose");

const SubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      minlength: [4, "Name cannot be shorter than 4 chars"],
      maxlength: [36, "Name cannot be longer than 36 chars"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    parent: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "Sub category must have a parent"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sub", SubSchema);
