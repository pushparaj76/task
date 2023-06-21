const mongoose = require("mongoose")
const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);        
        console.log("Database Connection Successfully")
    } catch (error) {
        console.log(`Connection Error  : ${error}`);
    }
}

module.exports = connectionDB;

