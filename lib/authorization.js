/**
 * Load Module Dependencies
 *
 * router.get("/users", authorization(["*"]), controller)
 */

module.exports = function authorizationMiddleware(roles) {
  return (req, res, next) => {
    let user = req._user;
    let isAuthorized = false;

    // roles.contains(user.role)

    for(let role of roles) {
      if(role === "*") {
        isAuthorized = true;
        break;
      }

      if(user.role === role) {
        isAuthorized = true;
        break;
      }
    }

    if(!isAuthorized) {
      res.status(401);
      res.json({
        status: 401,
        message: "Action Not Allowed",
        name: "AUTHORIZATION_ERROR"
      });
      return;
    } else {
      next();
    }
  }
}