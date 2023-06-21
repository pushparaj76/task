const Signup = require('../models/signupmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginController = async (req, res) => {
    let loginData = await Signup.findOne({ email: req.body.email });
    if (!loginData) {
        res.json({ message: "Invalid Email", success: false });
    }
    else {
        const match = await bcrypt.compare(req.body.password, loginData.password);
        if (match) {
            // jwt 
            let token = jwt.sign({ uid: loginData._id }, process.env.SECRATE_KEY, { expiresIn: '1hr' });
            if (token) {
                res.json({ message: "Login Successfull", success: true, token });

            }
            console.log(token);
        }
        else {
            res.json({ message: "Invalid User", success: false });
        }
    }
}

module.exports = loginController