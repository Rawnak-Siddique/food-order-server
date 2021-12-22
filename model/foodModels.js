import  Mongoose  from "mongoose";

const restaurantsSchema = Mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    description: {
        type: String
    }
});

const itemsSchema = Mongoose.Schema({
    title: {
        type: String
    },
    restaurantId: { 
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    }
});

const orderedSchema = Mongoose.Schema({});

const restaurantsModel = Mongoose.model("Restaurants", restaurantsSchema);
const itemsModel = Mongoose.model("Items", itemsSchema);
const orderedModel = Mongoose.model("Ordered", orderedSchema);

export { restaurantsModel, itemsModel, orderedModel };