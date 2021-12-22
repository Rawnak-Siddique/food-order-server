import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import DB from './config/db.js';
import foodRoutes from './route/foodRoutes.js';

const app = express();
dotenv.config();
DB();
app.use(express.json());
app.use(cors());

const PORT =  process.env.PORT;

app.get('/', (req, res) => {
    res.send(`server is up and running on port: ${PORT}`);
});

app.use('/api', foodRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));