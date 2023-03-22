const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      type: String,
    },
    createdAt: { type: Date, expires: 10000 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sessions", SessionSchema);
