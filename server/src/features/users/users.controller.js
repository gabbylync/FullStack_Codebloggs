const User = require("../../shared/DB/schemas/user.schema");
const Session = require("../../shared/DB/schemas/session.schema");
const { v4: uuidv4 } = require("uuid");

const userRegister = async (req, res) => {
  console.log(req.body);
  const {
    first_name,
    last_name,
    birthday,
    email,
    password,
    status,
    location,
    occupation,
    auth_level,
  } = req.body;
  if(!occupation ||!location ||!status || !email || !password || !last_name || !first_name )
    {
        return res.status(422).json({error:"Add all data"})
    }
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({
        first_name,
        last_name,
        birthday,
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
  // const userSess = { user: User.email, userID: User._id, token: uuidv4() };
  
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        console.log(user._id)
        const userSess = { user: user._id, token: uuidv4() };

        const sess = Session.create(userSess);
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
    console.log(req.params._id)
    const userId = await User.findById(req.params._id);
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

    const user = await User.findByIdAndUpdate({ _id: req.params.id },
      req.body,
      {
        new: true,
        upsert: false,
      }
    );
    if (user) {
      res.status(200).json({ msg: "User Successfully Updated ", data: user });
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
///////////////////////////////////////////
//// GET  /sessionemail/:token //////
////////////////////////////////////////
const getEmail = async(req, res) => {
  try {
      const sessionID = req.params;
      const session = await Session.findOne({token: req.params.token}).populate('user')
      res.status(200).json({session})
  } catch (error) {
      res.status(404).json({msg: error})
  }
}

///////////////////////////////////
//   DELETE: /user-delete/:id  ////
///////////////////////////////////

const userDelete = async(req, res) => {
  try{
      const userDel = await User.findByIdAndDelete(req.params.id)
  res.status(200).send({msg: 'Agent Deleted', data: userDel})
} catch (error){  
  res.status(404).json({msg:'ERROR: Agent not deleted due to improper request or because multiple agents were returned'})   
  console.log(error)
}

};


module.exports = {
  userRegister,
  userLogin,
  userById,
  returnUsers,
  userUpdate,
  validateTokenEndpoint,
  getEmail,
  userDelete
};
