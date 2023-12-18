const router = require("express").Router();
const { user } = require("./user");
const { team } = require("./team");

router.use("/", user);
router.use("/", team);
module.exports = { router };
