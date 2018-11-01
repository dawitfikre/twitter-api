/**
 * Load Module Dependencies
 * /profiles
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const profileController = require("../controllers/profile");

const router = express.Router();


router.post("/", profileController.createProfile);

router.get("/", profileController.getCollection);

router.get("/:id", profileController.getProfile);

router.put("/:id", profileController.updateProfile);

//router.delete("/id", profileController.removeProfile);


// Expose the Router
module.exports = router;