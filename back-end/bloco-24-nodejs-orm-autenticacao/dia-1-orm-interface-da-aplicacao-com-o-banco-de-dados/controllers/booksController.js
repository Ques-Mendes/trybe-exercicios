const booksService = require('../services/booksService');

const getAll = async (req, res) => {
  const books = await booksService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const bookById = await booksService.getById(id);
  if (!bookById) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(bookById);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const bookCreated = await booksService.create({  title, author, pageQuantity });
  res.status(200).json(bookCreated);
};

module.exports = {
  getAll,
  getById,
  create,
};