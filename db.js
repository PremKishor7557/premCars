const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://premshankar:prem%40123@cluster0.goqin.mongodb.net/premcars')

    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('Mongo DB Connection Successsful');
        
    })

    connection.on('error', ()=>{
        console.log('Mongo DB Connection Error');
        
    })
}

connectDB()

module.exports = mongoose