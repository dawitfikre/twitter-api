/**
 * Load Module Dependencies
 * /projects
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const projectController = require("../controllers/project");

const router = express.Router();


router.post("/", projectController.createProject);

router.get("/", projectController.getCollection);

router.get("/:id", projectController.getProject);

router.put("/:id", projectController.updateProject);

//router.delete("/id", projectController.removeProject);


// Expose the Router
module.exports = router;