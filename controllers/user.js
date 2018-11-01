//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */
const User = require("../dal/user");
const Profile = require("../dal/profile");
const Client = require("../dal/client");


/**
 * Create User
 * 
 * @desc This creates a user and corresponding profile and user type.
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware Dispatcher
 *
 * @return {void}
 * 
 */
exports.createUser = async function(req, res, next) {
  // 1. Validate Body Request and/or return validation errors
  // 2. Create User
  // 3. Create Profile
  // 4. Create UserType
  // 5. Respond with new User and/or any errors

  try {
    const body = req.body;

    req.checkBody("email", "Email Address Is Invalid")
       .notEmpty()
       .isEmail();
    req.checkBody("password", "Password is Invalid")
       .notEmpty();
    req.checkBody("first_name", "First Name is Invalid")
       .notEmpty();
    req.checkBody("last_name", "First Name is Invalid")
       .notEmpty();
    req.checkBody("role", "Role is Invalid")
       .notEmpty()
       .isIn(["client","talent","trainee"]);

    let validationErrors = req.validationErrors();
    if(validationErrors) {
      let err = new Error("User Creation Validation Errors");
      err.validation_errors = validationErrors;
      err.status = 400;

      throw err;
    }

    // check if user exists already
    let user = await User.getOne({ username: body.email });
    if(user) {
      let err = new Error("User Already Exists");
      err.status = 400;

      throw err;
    }
  
    // Create User
    user = await User.create({
      username: body.email,
      password: body.password,
      role: body.role
    });

    // Create Profile
    let profile = await Profile.create({
      first_name: body.first_name,
      last_name: body.last_name,
      user: user._id
    });

    // Create User Type
    if (body.role === "client") {
      let client = await Client.create({
        company: body.company,
        profile: profile._id
      })
    }

    res.status(201);
    res.json(user);

  } catch(ex) {
    res.status(ex.status || 500);
    res.json({
      status: ex.status || 500,
      message: ex.message,
      validation_errors: ex.validation_errors
    });
  }

};

/**
 * Get An User by passed query/param
 * 
 * 
 */
exports.getUser = async function(req, res, next) {
  const userId = req.params.id; 

  let user = await User.getOne({ _id: userId });

  res.json(user);
  
};

/**
 * Update An User 
 * 
 * 
 */
exports.updateUser = async function(req, res, next) {
  const userId = req.params.id;
  const body     = req.body; 

  let user = await User.update({ _id: userId }, body);

  res.json(user);
  
};


// Get Collection of Users
exports.getCollection = async function(req, res, next){
  let data = await User.getCollection({})

  res.json(data);
};

// Get Collection of Users
exports.getCollectionByPagination = async function(req, res, next){
  try {
    let qs = req.query;

    let data = await User.getCollectionByPagination({}, qs)

    res.json(data);
  } catch(ex) {
    res.status(ex.status || 500);
    res.json({
      status: ex.status || 500,
      message: ex.message,
      name: "GET_USERS_BY_PAGINATION"
    });
  }
}

// Default Controller
exports.notImplemented = async function(req, res, next) {
  res.status(404);

  res.json({
    message: "Not Implemented"
  })
};

