const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const bookById = await book.findByPk(id);
  return bookById;
};

const create = async ({ title, author, pageQuantity }) => {
  const bookCreated = await book.create({ title, author, pageQuantity });
  return bookCreated;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [bookUpdated] = await book.update(
    {
     title,
     author,
     pageQuantity,
    },
    { where: { id } },
  );
  return bookUpdated;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};