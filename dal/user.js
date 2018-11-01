/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const User = require("../models/user");

const bcrypt   = require("bcrypt");


/**
 * Create an user
 */
exports.create = async function(data) {
  let user = await User.create(data);

  user = await exports.getOne({ _id: user._id });

  return user;
}

/**
 * Fetch an user
 * GET /users/:id
 */
exports.getOne = async function(query) {

  let opts = '-password'

  let user = await User.findOne(query, opts);

  return user;
}

/**
 * Fetch users
 */
exports.getCollection = async function(query) {
  let user = await User.find(query);

  return user;
};

/**
 * Fetch users By Collection
 *
 * opts.query = {role:"client"}
 */
exports.getCollectionByPagination = async function(query, opts) {
  let defaults = Object.assign({},{
    sort: { created_at: "desc" },
    page: 1,
    limit: 50,
    select: "-password"
  },opts)

  defaults.limit = Number(defaults.limit)

  let res = await User.paginate(query, defaults);

  return {
    per_page: defaults.limit,
    page: defaults.page,
    pages: res.pages,
    total_docs: res.docs.length,
    data: res.docs.slice()
  };
};

/**
 * Update an user
 */
exports.update = async function(query, updates) {
  let user = await User.findOneAndUpdate(query, updates);

  return user;
}
/**
 * Remove an user
 */
exports.remove = async function(query) {
  let user = await User.findOneAndDelete(query);

  return user;
}

/**
 * Check Password
 */
exports.checkPassword = async function(instance, plainTextPassword) {
  let user = await User.findById(instance._id);

  return bcrypt.compareSync(user.password, plainTextPassword);
};