const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

/* ROUTER */
const router = express.Router();

/* ALL FUNCTIONS */
const {
  registerAccountant,
  loginAccountant,
  logoutAccountant,
} = require("../controllers/accountantController");

const { protectAccountant } = require("../middlewares/accountantProtect");

/* MULTER CONFIGURATIONS */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

/* APIs */
router.post("/register", upload.single("profilePhoto"), registerAccountant);
router.post("/login", loginAccountant);
router.post("/logout", logoutAccountant);

module.exports = router;
