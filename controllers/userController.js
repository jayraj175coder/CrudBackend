const Item = require('../models/itemModel');

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.getItemDetails = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

exports.addComment = async (req, res) => {
  const { comment } = req.body;
  const item = await Item.findById(req.params.id);
  item.comments.push(comment);
  await item.save();
  res.json(item);
};

exports.addRating = async (req, res) => {
  const { rating } = req.body;
  const item = await Item.findById(req.params.id);
  item.ratings.push(rating);
  await item.save();
  res.json(item);
};
