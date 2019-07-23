const express = require('express');
const router = express.Router();

// const ctrlUser = require('../controllers/user.controller');
const {register,login,forgotpass} = require("../controllers/user.controller");
// console.log("This is loginn  ",login)


router.post('/register', register);

router.post('/login', login);
router.post('/forgotpass',forgotpass);



module.exports = router;