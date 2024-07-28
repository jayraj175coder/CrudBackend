const User = require('../models/userModel');
const Item = require('../models/itemModel');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
};

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Similarly, add updateItem and deleteItem functions
