const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config();
const Stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


router.post('/create-checkout-session', (req, res) => {
    let status, error;
    const { token, CART } = req.body;
    try {
        Stripe.charges.create({
            source: token.id,
            amount: CART.amount * 100,
            currency: 'usd'
        });
        status = 'success';
    } catch (error) {
        console.log(error);
        status = 'Failure';
    }
    res.json({ error, status });
});

module.exports = router;