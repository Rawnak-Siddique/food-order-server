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
        type: Number
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    }
});

const listSchema = Mongoose.Schema({
    id: { 
        type: String
    },
    img: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    }
});

const orderedSchema = Mongoose.Schema({
    restaurantId: { 
        type: String
    },
    userId: { 
        type: String
    },
    restaurantCountry: {
        type: String
    },
    restaurantCity: {
        type: String
    },
    restaurantAddress: {
        type: String
    },
    userCountry: {
        type: String
    },
    userCity: {
        type: String
    },
    userAddress: {
        type: String
    },
    total: {
        type: Number
    },
    listItems: [listSchema]
});

const userSchema = Mongoose.Schema({
    name: { 
        type: String 
    },
    img: {
        type: String
    },
    email: {
        type: String
    },
    password: {
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
    }
});

const restaurantsModel = Mongoose.model("Restaurants", restaurantsSchema);
const itemsModel = Mongoose.model("Items", itemsSchema);
const orderedModel = Mongoose.model("Ordered", orderedSchema);
const usersModel = Mongoose.model("Users", userSchema);

export { restaurantsModel, itemsModel, orderedModel, usersModel };