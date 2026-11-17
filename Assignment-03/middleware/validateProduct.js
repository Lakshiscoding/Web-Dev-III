const validateProduct = (req, res, next) => {
  const { name, sku, category, price, quantity } = req.body;

  if (!name || !sku || !category) {
    return res.status(400).json({ message: "name, sku and category are required" });
  }
  if (typeof price !== "number" || typeof quantity !== "number") {
    return res.status(400).json({ message: "price and quantity must be numbers" });
  }

  next();
};

module.exports = validateProduct;
