const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const { request, response } = require('express');
const stripe = require('stripe')('')// Add test payment key from stripe
// API

//App config
const app = express();
//API routes
app.use(cors({ origin: true }));
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});*/

app.use(express.json());


//API roues
app.get('/', (request, response) => response.status(200).send('hello'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved for ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})
//Listen command
exports.api = functions.https.onRequest(app)
