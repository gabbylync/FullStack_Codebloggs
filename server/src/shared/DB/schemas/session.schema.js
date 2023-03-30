const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      trim: true,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // trim: true,
      // type: String,
    },
    createdAt: { 
      type: Date,
       expires: 86400,
       default: Date.now
       },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", SessionSchema);
