const express = require('express')
const { validateProductName, validateInfo, validateSaleDate, validateWarranty } = require("../middlewares")

const route = express.Router();

route.use(validateProductName)
route.use(validateInfo)
route.use(validateSaleDate)
route.use(validateWarranty)

route.post('/', function (req, res) {
  res.status(200).json({message: "sucess"})

})

module.exports = route;