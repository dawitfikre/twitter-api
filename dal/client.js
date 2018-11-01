/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Client = require("../models/client");
const Profile = require("../models/profile");

/**
 * Create an client
 */
exports.create = async function(data) {
  let client = await Client.create(data);

  return client;
}

/**
 * Fetch an client
 * GET /clients/:id
 */
exports.getOne = async function(query) {
  let client = await Client.findOne(query);

  return client;
}

/**
 * Fetch clients
 */
exports.getCollection = async function(query) {
  let client = await Client.find(query);

  return client;
}

/**
 * Update an client
 */
exports.update = async function(query, updates) {
  let client = await Client.findOneAndUpdate(query, updates);

  return client;
}
/**
 * Remove an client
 */
exports.remove = async function(query) {
  let client = await Client.findOneAndDelete(query);

  return client;
}
