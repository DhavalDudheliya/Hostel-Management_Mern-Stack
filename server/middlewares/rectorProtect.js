const jwt = require("jsonwebtoken");
const Rector = require("../models/rectorModel");

const protectRector = async (req, res, next) => {
  try {
    const rectorToken = req.cookies.rectorToken;

    if (!rectorToken) {
      return res.status(401).json({ message: "Token does not exists" });
    }

    const verifiedRector = jwt.verify(rectorToken, process.env.JWT_SECRET);

    root_user = await Rector.findOne({
      _id: verifiedRector._id,
    });

    req.user = root_user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authorization failed" });
  }
};

module.exports = { protectRector };