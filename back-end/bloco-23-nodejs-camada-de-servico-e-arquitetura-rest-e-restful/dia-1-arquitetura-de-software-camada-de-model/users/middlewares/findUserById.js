const rescue = require('express-rescue');
const User = requre('../models/User.js');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: tru, message: 'Usuário não encontrado' });
  }
  return res.status(200).json(user);
});