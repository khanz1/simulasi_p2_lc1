const { User } = require("../models");
const { compare } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");

class UserController {
  static register(req, res) {
    const { email, password } = req.body;
    User.create({ email, password })

      .then((data) => {
        res.status(201).json(req.body);
      })
      .catch((err) => {
        let error = err.errors.map((el) => el.message);
        res.status(400).json(error);
      });
  }

  static login(req, res) {
    const { email, password } = req.body;

    User.findOne({ where: { email: email } })
      .then((data) => {
        let passwordCompare = compare(password, data.password);
        if (passwordCompare) {
          let access_token = createToken({
            id: data.id,
            email: data.email,
          });
          res
            .status(200)
            .json({ id: data.id, email: data.email, access_token });
        } else {
          throw { status: 400, message: "Invalid email or password" };
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static photos(req, res) {
    //
  }
}

module.exports = UserController;
