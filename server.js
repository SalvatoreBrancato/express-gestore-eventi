const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const eventsRouter = require('./routers/events');
const routeNotFoundMiddleware = require('./middlewares/routeNotFound');
const errorFormatters = require('./middlewares/errorsFormatter')

// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/events', eventsRouter);

app.use(routeNotFoundMiddleware)
app.use(errorFormatters)

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`http://localhost:${process.env.PORT}/events`)
})