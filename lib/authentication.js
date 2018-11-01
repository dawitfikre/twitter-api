/**
 * Load Module Dependencies
 */
const unless = require("express-unless");
const Token  = require("../dal/token");

function authenticationMiddleware() {
  // 1. Check if Authorization Header is Present or throw error
  // 2. Check if Scheme is Bearer or throw error
  // 3. Check if Token is set after the scheme or throw error
  // 4. Check if the token is authentic or throw error
  // 5. Set User in session(req._user = user);
  let middleware = async function (req, res, next) {
    try {
      let authToken = req.get("Authorization");

      if(!authToken) {
        let err = new Error("Authorization Header is Missing");
        err.status = 400;

        throw err;
      }

      let parts = authToken.split(" ");
      if (parts[0] !== "Bearer") {
        let err = new Error("Authorization Header Scheme is Invalid");
        err.status = 400;

        throw err;
      }

      if (!parts[1]) {
        let err = new Error("Authorization Header Scheme is Invalid");
        err.status = 400;

        throw err;
      }

      let token = await Token.getOne({ value: parts[1] });
      if (!token) {
        let err = new Error("Authorization Header Token is Invalid");
        err.status = 400;

        throw err;
      }
      
      req._user = token.user;

      next();


    } catch(ex) {
      res.status(ex.status || 500);
      res.json({
        name: "AUTHENTICATION_ERROR",
        message: ex.message,
        status: ex.status
      })
    }
  };

  middleware.unless = unless;

  return middleware;

}

module.exports = authenticationMiddleware