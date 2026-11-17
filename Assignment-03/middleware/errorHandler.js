const errorHandler = (err, req, res, next) => {
  console.log(err.message);

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: "Validation failed", errors: messages });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid id or value" });
  }

  if (err.code === 11000) {
    return res.status(400).json({ message: "SKU already exists" });
  }

  res.status(500).json({ message: "Server error" });
};

module.exports = errorHandler;
