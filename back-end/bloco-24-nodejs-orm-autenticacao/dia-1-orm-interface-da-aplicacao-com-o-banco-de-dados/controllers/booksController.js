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
  if (!bookCreated) return res.status(405).json({ message: "Method ot Allowed" });
  res.status(200).json(bookCreated);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const bookUpdated = await booksService.update(id, { title, author, pageQuantity });
  if (!bookUpdated) return res.status(404).json({ message: "Book not found" });
  res.status(200).json({ message: "Book updated" });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};