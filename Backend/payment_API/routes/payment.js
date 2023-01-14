const express = require('express');
const router = express.Router();
//const { route } = require('./config');
//const uuid = require('uuid')
const stripe = require('stripe');

const dotenv = require('dotenv');

dotenv.config();

const stripeConfig = stripe(process.env.STRIPE_PRIVATE_KEY);
console.log(process.env.STRIPE_PRIVATE_KEY)
router.post('/create-checkout-session', (req, res) => {
    //const { product, token } = req.body;
   const { CART, token } = req.body;
    console.log("product", CART);
    // console.log("price",product.amount)
  // const idempontencyKey=uuid( )

    return stripeConfig.customers.create({
        email: token.email,
        source: token.id


    }).then(customer => {
        stripeConfig.charges.create({
           
           amount:CART.amount * 100,
            currency: 'usd',
           customer: customer.id,
            receipt_email: token.email,
            //description: `Ordered food-items ${product.name}`,
           //description: `Ordered food-items ${CART.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }
         // ,{idempontencyKey}
        )
    })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))


});


module.exports = router;