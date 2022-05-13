const validateProductName = require("./validateProductName");
const validateInfo = require("./validateInfo");
const validateSaleDate = require("./validateSaleDate");
const validateWarranty = require("./validateWarranty");
const errorHandler = require("./errorHandler");

module.exports = {
  validateProductName,
  validateInfo,
  validateSaleDate,
  validateWarranty,
  errorHandler,
};