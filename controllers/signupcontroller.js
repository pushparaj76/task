const Signup = require('../models/signupmodel');
const bcrypt = require('bcrypt');

const Signupcontroller = async (req,res) => {
let password = req.body.password;

let checkEmail =  await Signup.find({email:req.body.email})
if(checkEmail.length > 0)
{
    res.json({message: "Email already exists", success: false});    
}
else {
    bcrypt.hash(password, 10, async function(err, hash) {

    
    // Store hash in your password DB.
        if(err){
            console.log(err);
        }
        const user = new Signup({name: req.body.name, email: req.body.email, password:hash});
        let result = await user.save();
        if(result){
            res.json({message: "User Successfully Added", success: true })
        }
        else{
            res.json({message: "Something is wrong", success: false })
        }
    

});
}



}
module.exports = Signupcontroller