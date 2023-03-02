import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from 'dotenv'
dotenv.config();

import routes from './routes';
import { dbCreateConnection } from './config/dbCreateConnection';

const app = express();

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};


app.use(cors(options));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.use('/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

(async () => {
    try {
        await dbCreateConnection();
    } catch ( e ) {
        process.exit(0);
    }
})();
