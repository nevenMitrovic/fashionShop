const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getAll, getById } = require("../methods/methods");

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if ((email, username, password == "")) {
      res.status(403).json({ message: "Unesite email,username i password!" });
    } else {
      let user = await User.findOne({ email });
      if (user != null) {
        res.status(403).json({
          message: "Korisnik pod istim email ili username vec postoji!",
        });
      } else {
        user = await User.findOne({ username });
        if (user != null) {
          res.status(403).json({
            message: "Korisnik pod istim email ili username vec postoji!",
          });
        } else {
          const hash = await bcrypt.hash(password, 10);
          user = new User({ email, username, password: hash, role: 0 });
          await user.save();
          res.status(200).json({ message: "Korisnik je uspesno registrovan!" });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Serverska greska!" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user == null) {
      res.status(403).json({ message: "Nisu ispravni kredencijali!" });
    } else {
      const decrypt = bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          res.status(403).json({ message: "Nisu ispravni kredencijali!" });
        } else {
          const token = jwt.sign({ userID: user._id }, process.env.secretkey);
          res
            .status(200)
            .json({ message: "Uspesno ste se ulogovali!", token: token, username });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const productsPromise = await getAll();
    await res.status(200).json(productsPromise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const productID = async (req, res) => {
  try {
    const id = req.body;
    const product = await getById(id);
    await res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  register,
  login,
  getAllProducts,
  productID,
};
