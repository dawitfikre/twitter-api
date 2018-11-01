/**
 * Load Module Dependencies
 * /clients
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const clientController = require("../controllers/client");
const acl              = require("../lib/authorization");

const router = express.Router();


router.post("/", clientController.createClient);

router.get("/", acl(["management"]), clientController.getCollection);

router.get("/:id", clientController.getClient);

router.put("/:id", clientController.updateClient);

//router.delete("/id", clientController.removeClient);


// Expose the Router
module.exports = router;