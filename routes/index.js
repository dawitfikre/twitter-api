/**
 * Load Module Dependencies
 */
const express = require("express");

const user = require("./user");
const profile = require("./profile");
const client = require("./client");
const project = require("./project");

// Resources should always be pluralized and in nouns

module.exports = function appRouter(app) {
  // Users Endpoint
  app.use("/users", user);

  // Profiles Endpoint
  app.use("/profiles", profile);

  // Clients Endpoint
  app.use("/clients", client);

  // Projects Endpoint
  app.use("/projects", project);

};