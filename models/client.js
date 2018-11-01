/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Declare Schema For Client
const Client = new Schema({
  company: { type: String, required: true },
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  created_at: { type: Date },
  updated_at: { type: Date }
})

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Client.pre("save", function (next){
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;
  
  next();
});


// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("Client", Client)