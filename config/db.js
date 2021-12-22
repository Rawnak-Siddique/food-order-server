import  Mongoose  from "mongoose";

const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.Mongo_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Server connected to MongoDb");
        });
    } catch (error) {
        console.log(`Error: ${error.messages}`);
    }
};

export default connectDB;