/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Declare Schema For Project
const Project = new Schema({
  title: { type: String, required: true },
  cost:  { type: Number, default: 0 },
  start_date: { type: Date, default: null },
  end_date: { type: Date, default: null },
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  talents: [{ type: Schema.Types.ObjectId, ref: "Talent" }],
  created_at: { type: Date },
  updated_at: { type: Date }
})

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Project.pre("save", function (next){
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;
  
  next();
});


// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("Project", Project)