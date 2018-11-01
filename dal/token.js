/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Token = require("../models/token");
const User = require("../models/user");

const population = [{
  path: "user",
  select: "-password"
}]

/**
 * Create an token
 */
exports.create = async function(data) {
  let token = await Token.create(data);

  return token;
}

/**
 * Fetch an token
 * GET /tokens/:id
 */
exports.getOne = async function(query) {
  let token = await Token.findOne(query).populate(population);

  return token;
}

/**
 * Fetch tokens
 */
exports.getCollection = async function(query) {
  let token = await Token.find(query);

  return token;
}

/**
 * Update an token
 */
exports.update = async function(query, updates) {
  let token = await Token.findOneAndUpdate(query, updates);

  return token;
}
/**
 * Remove an token
 */
exports.remove = async function(query) {
  let token = await Token.findOneAndDelete(query);

  return token;
}

/**
 * Upsert A token
 */
exports.upsert = async function(user, tokenValue) {
  // Check if it exists
  let token = await Token.findOne({ user: user._id });

  if(!token) {
    token = await Token.create({
      user: user._id,
      value: tokenValue
    });
  } else {
    token = await Token.findOneAndUpdate({
      _id: token._id
    },{
      value: tokenValue
    })
  }

  return token;
}
