const validateSaleDate = (req, res, next) =>{
  const {saleDate} = req.body.infos
  if (!saleDate) {
  return res.status(400).json({message: "O campo saleDate é obrigatório"})
  }
  // regex from stackoverflow
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;  
  if (!saleDate.match(dateRegex)) {
  return res.status(400).json({message: "O campo saleDate não é uma data válida"})
  }
  
  next();
}

module.exports = validateSaleDate;