const express = require("express");
const router = express.Router();

// item model
const Item = require("../../models/Item");

// @route    GET api/items
// @desc     Gets all items
// @access   Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ quantity: -1 })
    .then((item) => res.json(item));
});

// @route    POST api/items
// @desc     Create an item
// @access   Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  newItem.save().then((item) => res.json(item));
});

// @route    DELETE api/items
// @desc     Delete an item
// @access   Public

router.delete("/:id", (req, res) => {
  Item.deleteOne({ id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).json({ success: false });
    }
    return res.json({ success: true });
  });
});

module.exports = router;
