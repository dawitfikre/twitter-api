//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */
const crypto  = require("crypto");

const User    = require("../dal/user");
const Profile = require("../dal/profile");
const Client  = require("../dal/client");
const Token   = require("../dal/token");
const config  = require("../config");


/**
 * Login User
 * 
 * @desc This Logs in a user and sets the auth token
 *
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Middleware Dispatcher
 *
 * @return {void}
 * 
 */
exports.loginUser = async function(req, res, next) {
  // 1. Validate Body Request and/or return validation errors
  // 2. Check Id  User exists
  // 3. Check Password
  // 4. Get Profile
  // 5. Get User Type
  // 6. Upsert Auth Token- Create Or Update
  // 7. Respond with User, Profile, UserType and Auth Token

  try {
    const body = req.body;

    req.checkBody("email", "Email Address Is Invalid")
       .notEmpty()
       .isEmail();
    req.checkBody("password", "Password is Invalid")
       .notEmpty();

    let validationErrors = req.validationErrors();
    if(validationErrors) {
      let err = new Error("User Login Validation Errors");
      err.validation_errors = validationErrors;
      err.status = 400;

      throw err;
    }

    // check if user exists already
    let user = await User.getOne({ username: body.email });
    if(!user) {
      let err = new Error("User Does Not Exists");
      err.status = 400;

      throw err;
    }

    // compare password
    let isPasswordOk = User.checkPassword(user, body.password);
    if(!isPasswordOk) {
      let err = new Error("Password is Incorrect");
      err.status = 400;

      throw err;
    }

    // -- BUILD THE RESPONSE --
    // { user: {}, profile: {}, token: "", userType: {}}
    let data = {
      user: user
    }

    let profile = await Profile.getOne({ user: user._id });
    data.profile = profile;

    if (user.role === "client") {
      let client = await Client.getOne({ profile: profile._id });
      data.client = client;
    }

    // Upsert Token
    let tokenValue = crypto.randomBytes(config.AUTH_TOKEN_LENGTH).toString("base64")
    let token = await Token.upsert(user, tokenValue);

    data.token = tokenValue;

    res.json(data);

  } catch(ex) {
    res.status(ex.status || 500);
    res.json({
      status: ex.status || 500,
      message: ex.message,
      validation_errors: ex.validation_errors
    });
  }

};