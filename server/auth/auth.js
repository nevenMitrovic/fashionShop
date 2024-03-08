const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, process.env.secretkey, (err, res) => {
    if (err) return res.status(403).json({ error: err });
  });
  next();
};

module.exports = { authenticateToken };
