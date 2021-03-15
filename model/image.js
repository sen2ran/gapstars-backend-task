const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageURL: {
      type: String,
      trim: true,
    },
    isSelected: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Image = mongoose.model("Image", imageSchema);

exports.Image = Image;
