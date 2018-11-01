/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Declare Schema For Profile
const Profile = new Schema({
  first_name: { type: String },
  last_name:  { type: String },
  country:    { type: String, default: "SELECT" },
  city:    { type: String, default: "SELECT" }, 
  gender:    { type: String, enum: ["Male", "Female", "SELECT"], default: "SELECT"  }, 
  date_of_birth: { type: Date, default: null },
  profile_pic:   { type: String, default: "NONE"},
  user:       { type: Schema.Types.ObjectId, ref: "User" }, 
  created_at: { type: Date },
  updated_at: { type: Date }
})

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Profile.pre("save", function (next){
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;
  
  next();
});


// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("Profile", Profile)