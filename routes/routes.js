const express = require("express");
const Signupcontroller = require('../controllers/signupcontroller');
const LoginController = require('../controllers/logincontroller');
const authMiddleware = require("../middlerware/authMiddleware");
const {blogController, manageController} = require("../controllers/blogcontroller");
const router = express.Router();


// REQUEST || LOGIN 
router.post("/login", LoginController)

// REQUEST || POST 
router.post("/signup", Signupcontroller) 

// REQUEST || POST 

router.post("/addblog", blogController);

// REQUEST || GET 
//router.get("/manage", authMiddleware, manageController)
router.get("/manage", manageController)

module.exports = router;
