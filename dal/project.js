/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Project = require("../models/project");
const Client = require("../models/client");

/**
 * Create an project
 */
exports.create = async function(data) {
  let project = await Project.create(data);

  return project;
}

/**
 * Fetch an project
 * GET /projects/:id
 */
exports.getOne = async function(query) {
  let project = await Project.findOne(query);

  return project;
}

/**
 * Fetch projects
 */
exports.getCollection = async function(query) {
  let project = await Project.find(query);

  return project;
}

/**
 * Update an project
 */
exports.update = async function(query, updates) {
  let project = await Project.findOneAndUpdate(query, updates);

  return project;
}
/**
 * Remove an project
 */
exports.remove = async function(query) {
  let project = await Project.findOneAndDelete(query);

  return project;
}
