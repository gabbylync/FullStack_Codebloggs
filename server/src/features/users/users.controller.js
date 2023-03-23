const User = require("../../shared/DB/schemas/user.schema");
const Session = require("../../shared/DB/schemas/session.schema");
const { v4: uuidv4 } = require("uuid");

const userRegister = async (req, res) => {
  console.log(req.body);
  const {
    first_name,
    last_name,
    email,
    password,
    status,
    location,
    occupation,
    auth_level,
  } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({
        first_name,
        last_name,
        email,
        password,
        status,
        location,
        occupation,
        auth_level,
      });
      user.save((err) => {
        if (err) {
          res.send({ error: err });
        } else {
          res.send({ message: "sucessfull", user: user._id });
        }
      });
    }
  });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const userSess = { user: User.email, userID: User._id, token: uuidv4() };
  const sess = Session.create(userSess);
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({
          message: "sucessfull",
          user: user._id,
          email: email,
          Session: userSess,
        });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send({ message: "not registered" });
    }
  });
};

const validateTokenEndpoint = async (req, res) => {
  try {
    const tokenValid = await Session.findOne({
      token: req.params.token,
    }).populate("user");
    if (tokenValid) {
      res
        .status(200)
        .json({ msg: "Congrats: Validated Token!", data: tokenValid });
    } else {
      res.status(401).json({ msg: "No tokens are found" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const userById = async (req, res) => {
  try {
    const userId = await User.findOne({ user: req.query._id });
    res.send(userId);
    console.log(userId);
  } catch (error) {
    res.status(500).json({ msg: "Error: User Not Found." });
  }
};

const returnUsers = async (req, res) => {
  try {
    const userReturn = await User.find({});
    res.send(userReturn);
  } catch (error) {
    res.status(500).send("Error: Unable to process request.");
  }
};

const userUpdate = async (req, res) => {
  try {
    // const allowed = filterUpdates(req.body);

    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        upsert: false,
      }
    );
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res
        .status(404)
        .json({ err: `No information found for ID: ${req.params.id}` });
    }
  } catch (err) {
    console.error(err);
    res.status(404).send({ error: err });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userById,
  returnUsers,
  userUpdate,
  validateTokenEndpoint,
};