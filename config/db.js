const mongoose=require('mongoose');


//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
 const db = process.env.MY_MONGO_URI;

const connectDB =async()=>{
    try {

        await mongoose.connect(db);
        console.log('MongoDB is Connected...')
    } catch (err) {
        console.error(err.message);
        console.log('Check Your ENV VAR')
        process.exit(1)
    }
}
module.exports = connectDB;