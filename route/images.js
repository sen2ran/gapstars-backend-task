const express = require("express");
const router = express.Router();

const Json = require("../sample.json");
const { Image } = require("../model/image");

/**
 * @getAll
 */
router.get("/", async (req, res) => {
  let images = await Image.find();

  return res.send({
    success: true,
    details: images,
  });
});

/**
 * @selectedImages
 */
router.get("/selectedImage", async (req, res) => {
  let images = await Image.find({
    isSelected: true,
  });

  return res.send({
    success: true,
    details: images,
  });
});

module.exports = router;
