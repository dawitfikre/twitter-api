/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Profile = require("../models/profile");
const User    = require("../models/user");


/**
 * Create an profile
 */
exports.create = async function(data) {
  let profile = await Profile.create(data);

  return profile;
}

/**
 * Fetch an profile
 * GET /profiles/:id
 */
exports.getOne = async function(query) {
  let profile = await Profile.findOne(query);

  return profile;
}

/**
 * Fetch profiles
 */
exports.getCollection = async function(query) {
  let profile = await Profile.find(query);

  return profile;
}

/**
 * Update an profile
 */
exports.update = async function(query, updates) {
  let opts = {
    new: true
  };
  
  let profile = await Profile.findOneAndUpdate(query, updates, opts);

  return profile;
}
/**
 * Remove an profile
 */
exports.remove = async function(query) {
  let profile = await Profile.deleteOne(query);

  return profile;
}
