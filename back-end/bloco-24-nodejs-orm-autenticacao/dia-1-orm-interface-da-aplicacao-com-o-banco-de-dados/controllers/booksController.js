const booksService = require('../services/booksService');

const getAll = async (req, res) => {
  const books = await booksService.getAll();
  res.status(200).json(books);
};

module.exports = {
  getAll,
};