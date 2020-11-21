const express = require("express");
const {
  getSubs,
  createSub,
  deleteSub,
} = require("../controllers/subController");

const router = express.Router();

router.route("/").get(getSubs).post(createSub);

router.route("/:subId").delete(deleteSub);

module.exports = router;
