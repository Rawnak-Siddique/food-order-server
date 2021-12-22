import Express from 'express';
import { createRestaurant,
    findRestaurant, 
    findAllRestaurant, 
    findCountryRestaurant, 
    findCityRestaurant,
    logInRestaurant,
    createItem,
    getItem } from '../controller/foodController.js';

const routes = Express.Router();

routes.post('/create-restaurant', createRestaurant);

routes.get('/find-all-restaurant', findAllRestaurant);

routes.get('/find-country-restaurant/:country', findCountryRestaurant);

routes.get('/find-city-restaurant/:city', findCityRestaurant);

routes.get('/find-restaurant/:country/:city', findRestaurant);

routes.get('/log-in-restaurant/:email/:password', logInRestaurant);

routes.post('/create-item', createItem);

routes.get('/get-item/:id', getItem);

export default routes;