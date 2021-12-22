import { restaurantsModel, itemsModel, orderedModel } from '../model/foodModels.js';

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
    const emailprofile = req.params.email;
    const passwordprofile = req.params.password;

    const restaurant = await restaurantsModel.find({
        email: emailprofile,
        password: passwordprofile,
    });
    if (restaurant.length > 0){
        res.send(restaurant)
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

export { 
    createRestaurant, 
    findRestaurant, 
    findAllRestaurant, 
    findCountryRestaurant, 
    findCityRestaurant,
    logInRestaurant,
    createItem,
    getItem };