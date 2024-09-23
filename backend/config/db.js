const mongoose=require('mongoose')
const connectionDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected :${conn.connection.host}.cyan.underline`)
    }catch(error){
              console.log(`Error : ${error.message}`.red.underline.bold);
              process.exit(1)
    }
}
module.exports=connectionDB