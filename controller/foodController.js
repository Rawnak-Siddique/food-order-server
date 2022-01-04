import { restaurantsModel, itemsModel, orderedModel, usersModel } from '../model/foodModels.js';

const createRestaurant = async (req, res) => {
    const { title, img, country, city, address, email, password, description} = req.body

    const addRestaurant = await restaurantsModel.create({ 
        title, img, country, city, address, email, password, description
    });

    if (addRestaurant){
        res.send(addRestaurant)
    }else{
        res.status(500).send("Unsuccessful");
    }
};

const findAllRestaurant = async (req, res) => {
    const restaurantList = await restaurantsModel.find({});

    if (restaurantList.length > 0){
        res.send(restaurantList)
    }else {
        res.status(404).send("No restaurant found");
    }
};

const findCountryRestaurant = async (req, res) => {
    const countries = req.params.country;

    const restaurantList = await restaurantsModel.find({
        country: countries
    });

    if (restaurantList.length > 0){
        res.send(restaurantList)
    }else {
        res.status(404).send("No restaurant found");
    }
};

const findCityRestaurant = async (req, res) => {
    const cities = req.params.city;

    const restaurantList = await restaurantsModel.find({
        city: cities
    });

    if (restaurantList.length > 0){
        res.send(restaurantList)
    }else {
        res.status(404).send("No restaurant found");
    }
};

const findRestaurant = async (req, res) => {
    const countries = req.params.country;
    const cities = req.params.city;

    const restaurantList = await restaurantsModel.find({
        country: countries,
        city: cities
    });

    if (restaurantList.length > 0){
        res.send(restaurantList)
    }else {
        res.status(404).send("No restaurant found");
    }
};

const logInRestaurant = async (req, res) => {
    const emailProfile = req.params.email;
    const passwordProfile = req.params.password;

    const restaurant = await restaurantsModel.find({
        email: emailProfile,
        password: passwordProfile,
    });
    if (restaurant.length > 0){
        res.send(restaurant)
    }else {
        res.status(404).send("No restaurant found");
    }
};

const getRestaurants = async (req, res) => {
    const restaurantId = req.params.id;

    const oneRestaurant = await restaurantsModel.find({
        _id: restaurantId
    });
    if (oneRestaurant.length > 0){
        res.send(oneRestaurant)
    }else {
        res.status(404).send("No restaurant found");
    }
};

const createItem = async (req, res) => {
    const { title, restaurantId, img, price, description, ingredients } = req.body;

    const addItem = await itemsModel.create({
        title, restaurantId, img, price, description, ingredients
    });

    if (addItem){
        res.send(addItem)
    }else{
        res.status(500).send("Unsuccessful");
    }
};

const getItem = async (req, res) => {
    const id = req.params.id;

    const itemList = await itemsModel.find({
        restaurantId: id
    });

    if (itemList.length > 0){
        res.send(itemList)
    }else {
        res.status(404).send("No restaurant items are found");
    }
};

const createOrder = async (req, res) => {
    const { restaurantId, userId, restaurantCountry, restaurantCity, restaurantAddress, userCountry, userCity, userAddress, total, listItems } = req.body;

    const createOrder = await orderedModel.create({
        restaurantId, userId, restaurantCountry, restaurantCity, restaurantAddress, userCountry, userCity, userAddress, total, listItems
    });

    if (createOrder){
        res.send(createOrder)
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getRestaurantsOrder = async (req, res) => {
    const restaurantId = req.params.id;

    const orderList = await orderedModel.find({
        restaurantId: restaurantId
    });
    if (orderList.length > 0){
        res.send(orderList)
    }else {
        res.status(404).send("No restaurant order was found");
    }
};

const getUserOrder = async (req, res) => {
    const userId = req.params.id;

    const orderList = await orderedModel.find({
        userId: userId
    });
    if (orderList.length > 0){
        res.send(orderList)
    }else {
        res.status(404).send("No restaurant order was found for this user");
    }
};

const createUser = async (req, res) => {
    const { name, img, email, password, country, city, address } = req.body;

    const createUser = await usersModel.create({
        name, img, email, password, country, city, address
    });
    if (createUser){
        res.send(createUser)
    }else {
        res.status(500).send("Unsuccessful");
    }
};

const getUser = async (req, res) => {
    const emailProfile = req.params.email;
    const passwordProfile = req.params.password;

    const user = await usersModel.find({
        email: emailProfile,
        password: passwordProfile,
    });

    if (user.length > 0) {
        res.send(user);
    }else {
        res.status(404).send("No User found");
    }
}

export { 
    createRestaurant, 
    findRestaurant, 
    findAllRestaurant, 
    findCountryRestaurant, 
    findCityRestaurant,
    logInRestaurant,
    getRestaurants,
    createItem,
    getItem,
    createOrder,
    getRestaurantsOrder,
    getUserOrder,
    createUser, 
    getUser};