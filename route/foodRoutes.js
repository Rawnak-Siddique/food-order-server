import Express from 'express';
import { createRestaurant,
    findRestaurant, 
    findAllRestaurant, 
    findCountryRestaurant, 
    findCityRestaurant,
    logInRestaurant,
    createItem,
    getItem, 
    getRestaurants, 
    createOrder, 
    getRestaurantsOrder, 
    getUserOrder, 
    createUser, 
    getUser} from '../controller/foodController.js';

const routes = Express.Router();

routes.post('/create-restaurant', createRestaurant);

routes.get('/find-all-restaurant', findAllRestaurant);

routes.get('/find-country-restaurant/:country', findCountryRestaurant);

routes.get('/find-city-restaurant/:city', findCityRestaurant);

routes.get('/find-restaurant/:country/:city', findRestaurant);

routes.get('/log-in-restaurant/:email/:password', logInRestaurant);

routes.get('/get-restaurant/:id', getRestaurants);

routes.post('/create-item', createItem);

routes.get('/get-item/:id', getItem);

routes.post('/create-order', createOrder);

routes.get('/get-restaurant-order/:id', getRestaurantsOrder);

routes.get('/get-user-order/:id', getUserOrder);

routes.post('/create-profile', createUser);

routes.get('/log-in-profile/:email/:password', getUser);

export default routes;