# How to use Express and TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `src/config/ormConfig.ts` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`

### List of APIs

1. Get all cars `http://localhost:3000/car` - GET
2. Get cars by make `http://localhost:3000/car/:search` - GET
3. Insert cars `http://localhost:3000/car` - POST
4. use curl, postman or other tools to send http requests to test your typeorm-based API

### API Cache

#### Node-cache module is being used for API caching.

### Create Database Schema

CREATE SCHEMA 'test';

### How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands
