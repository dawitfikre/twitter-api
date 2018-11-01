/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");
const bcrypt   = require("bcrypt");
const paginate = require("mongoose-paginate");

const config   = require("../config");

const Schema = mongoose.Schema;


// Declare Schema For User
const User = new Schema({
  username:   { type: String, required: true, unique: true },
  last_login: { type: Date, default: null },
  password:   { type: String },
  role:       { type: String, enum: ["client", "talent", "trainee"] },
  realm:      { type: String, default: "User" },
  created_at: { type: Date },
  updated_at: { type: Date }
})

// Attach Plugins
User.plugin(paginate);

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
User.pre("save", function (next){
  let now = (new Date()).toISOString();

  let hash = bcrypt.hashSync(this.password, config.SALT_FACTOR);

  this.created_at = now;
  this.updated_at = now;
  this.password   = hash;

  next();
});

// Model Attributes to Return



// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("User", User)