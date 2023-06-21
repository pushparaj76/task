const jwt = require("jsonwebtoken");
module.exports = (req,res,next) => {
    try {
            let token = req.headers['authorization'].split(" ")[1];
            jwt.verify(token, process.env.SECRATE_KEY, (error, decode)=>{
                
                if(error){
                    res.json({message: "auth failed", success: false})
                }
                else{
                   req.body.userId =  decode.uid
                   next();
                }
            })

    } catch (error) {
        console.log(error)
    }
}