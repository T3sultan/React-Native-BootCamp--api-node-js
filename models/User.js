const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please give name"],
  },
  bio: {
    type: String,
    required: [true, "Please give bio"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please give email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minlength: 5,
  },
});

module.exports = mongoose.model("User", UserSchema);
