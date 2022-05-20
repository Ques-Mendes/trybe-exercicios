const  errorHandler = (err, req, res, next) => {
  res.status(500).send(`Ops, omething went wrong! message: ${err.message}`);
}

module.exports = errorHandler;
