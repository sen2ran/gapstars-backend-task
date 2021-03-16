const express = require("express");
const router = express.Router();

const Json = require("../sample.json");
const { Image } = require("../model/image");


router.get("/reset", async (req, res) => {
  let json = Json.entries.map(x => {
    return { imageURL: x.picture, isSelected: false }
  })

 let val = await Image.insertMany(json)

  return res.send({
    success: true,
    details: val,
  });
});


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


/**
 * @selectedImages
 */
router.get("/set/:id", async (req, res) => {
  let image = await Image.findById(req.params.id)

  image.set({
    isSelected : !image.isSelected
  })

  await image.save()

  return res.send({
    success: true,
    details: image,
  });
});

module.exports = router;
