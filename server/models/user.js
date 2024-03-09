const mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return value.match(re);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password:{
    required: true,
    type: String,

  },

  address:{
    type: String,
    default: "",
  },
  type:{
    type: String,
    default: "user",
  }
});

const User = mongoose.model('UserFlutter', userSchema);

module.exports = User;
