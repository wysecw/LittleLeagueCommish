const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require("bcrypt");
let SALT_WORK_FACTOR = 10;

let UserSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  phone_number: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  admin: Boolean,
  players: [{ type: Schema.Types.ObjectId, ref: "Player" }]
});

UserSchema.pre("save", function(next) {
  let user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) console.log(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        console.log(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.statics.exists = async function(name) {
  const result = await this.findOne(name)
    .select("_id")
    .lean();
  return result ? true : false;
};
//virtual function for full name

//virtual function for age

//virtual for team url

module.exports = mongoose.model("User", UserSchema);
