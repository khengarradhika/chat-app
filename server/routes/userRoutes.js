const {register} = require("./controllers/userController");
const router = require("express").Router();
router.post("/registered",register);
module.exports= router;
