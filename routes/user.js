/**
 * Load Module Dependencies
 * /users
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const userController = require("../controllers/user");
const authController = require("../controllers/auth");

const router = express.Router();

/**
 * @api {post} /users/create Signup Talent
 * @apiName CreateTalentUser
 * @apiGroup User
 * @apiVersion 2.0.0
 *
 * @apiDescription This Creates a talent user belonging to a specific role.
 *
 * @apiParam {string} email Email Address
 * @apiParam {string} password Unique password
 * @apiParam {string} role User Role 
 * @apiParam {string} first_name User First Name
 * @apiParam {string} last_name User Last Name
 * @apiParam {string} [company] Client Company
 * 
 *
 * @apiParamExample Request Payload:
 * {
 *  "email": "tony@gebeya.com",
 *  "password": "password",
 *  "role": "talent",
 *  "first_name": "Tony",
 *  "last_name": "Mutai"
 * }
 *
 * @apiSuccess {string} _id User Unique Id
 * @apiSuccess {string} username Email Address
 * @apiSuccess {string} role User Role ie _client_, _talent_ etc
 * @apiSuccess {string} last_login Last Login Timestamp
 * @apiSuccess {string} last_name User Last Name
 * @apiSuccess {string} created_at Last Login Timestamp
 * @apiSuccess {string} updated_at Last Login Timestamp
 * 
 *
 * @apiSuccessExample Request Payload:
 * {
 *  "_id": "5bc3640847e10cb60ce81044",
 *  "username": "tony@gebeya.com",
 *  "role": "talent",
 *  "created_at": "2018-10-14T15:43:22.052Z",
 *  "updated_at": "2018-10-14T15:43:22.052Zs",
 *  "last_login": null
 * }
 *
 *
 */

/**
 * @api {post} /users/create Signup Client
 * @apiName CreateClientUser
 * @apiGroup User
 *
 * @apiDescription This Creates a client user belonging to a specific role.
 *
 * @apiParam {string} email Email Address
 * @apiParam {string} password Unique password
 * @apiParam {string} role User Role
 * @apiParam {string} first_name User First Name
 * @apiParam {string} last_name User Last Name
 * @apiParam {string} [company] Client Company
 * 
 *
 * @apiParamExample Request Payload:
 * {
 *  "email": "tony@gebeya.com",
 *  "password": "password",
 *  "role": "client",
 *  "first_name": "Tony",
 *  "last_name": "Mutai",
 *  "company": "Koncart"
 * }
 *
 * @apiSuccess {string} _id User Unique Id
 * @apiSuccess {string} username Email Address
 * @apiSuccess {string} role User Role ie _client_, _talent_ etc
 * @apiSuccess {string} last_login Last Login Timestamp
 * @apiSuccess {string} last_name User Last Name
 * @apiSuccess {string} created_at Last Login Timestamp
 * @apiSuccess {string} updated_at Last Login Timestamp
 * 
 *
 * @apiSuccessExample Request Payload:
 * {
 *  "_id": "5bc3640847e10cb60ce81044",
 *  "username": "tony@gebeya.com",
 *  "role": "client",
 *  "created_at": "2018-10-14T15:43:22.052Z",
 *  "updated_at": "2018-10-14T15:43:22.052Zs",
 *  "last_login": null
 * }
 *
 *
 */
router.post("/create", userController.createUser);

router.post("/login", authController.loginUser);

router.get("/", userController.getCollectionByPagination);

router.get("/:id", userController.getUser);

router.put("/:id", userController.updateUser);

//router.delete("/:id", userController.removeUser);


// Expose the Router
module.exports = router;