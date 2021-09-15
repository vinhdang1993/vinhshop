const mongoose = require('mongoose');

// async function connect(){
    const connectDB = async() =>{
    try {
        // mongodb+srv://vinhshop:myAIWYNbtbjdfaEk@vinhdang.gpgbb.mongodb.net/shop?retryWrites=true&w=majority

        const conn =  mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            useCreateIndex: true
            });
        // console.log(res)
        console.log("db: ",process.env.MONGO_URI)
       
        // console.log(`connect `, conn)
        console.log('connect success');
    } catch (error) {
       
        // console.log(conn)
        // console.log(process.env.MONGO_URI)
        console.log("connect error");
    }
};
module.exports = {connectDB};
// export default connectDB

