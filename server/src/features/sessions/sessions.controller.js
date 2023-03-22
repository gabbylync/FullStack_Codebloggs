const Session = require("../../shared/resources/DB/schemas/sessions.schema");

const { v4: uuidv4 } = require("uuid");

const checkSessionToken = async (req, res, next) => {
  const { session_token } = req.cookies;
  if (!session_token) {
    res.redirect("/login");
  } else {
    const session = await Session.findOne({ session_token });
    if (!session) {
      res.redirect("/login");
    } else {
      req.user = session.user;
      res.locals.user = req.user; // make user available in views
      next();
    }
  }
};

const validateToken = async (req, res) => {
  res.json({
    status: "ok",
    data: {
      status: ok,
      data: {
        valid: boolean,
        user: { first_name, last_name, id },
        message: null,
      },
    },
  });
};

const loginSession = async (req, res) => {
  const { user_id } = req.body;

  // Generate session token
  const session_token = uuidv4();

  // Save session to MongoDB
  const session = new Session({
    session_token,
    user: { first_name: "John", last_name: "Doe", id: user_id },
  });
  await session.save();

  // Set session token cookie and redirect to admin home
  res.cookie("session_token", session_token, { maxAge: 10000 }); // expire after 24 hours
  res.redirect("/admin");
};

const logoutSession = async (req, res) => {
  res.clearCookie("session_token");
  res.redirect("/login");
};

module.exports = {
  checkSessionToken,
  validateToken,
  loginSession,
  logoutSession,
};
