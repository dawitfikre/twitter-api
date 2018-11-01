/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Declare Schema For Token
const Token = new Schema({
  value: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date },
  updated_at: { type: Date }
})

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Token.pre("save", function (next){
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;
  
  next();
});


// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("Token", Token)