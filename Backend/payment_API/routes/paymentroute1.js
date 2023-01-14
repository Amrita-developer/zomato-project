const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const dotenv = require('dotenv');

dotenv.config();

//const stripeConfig = stripe(process.env.STRIPE_PRIVATE_KEY);

router.post('/create-checkout-session', (req, res) => {
    
    const { CART, token } = req.body;
    console.log("product", CART);
    // console.log("price",product.amount)
    // const idempontencyKey=uuid( )
    try{
        const session=stripe.checkout.session.create({
            payment_method_types:['card'],
            mode:'payment',
            success_url:'http://localhost:3000',
            line_items:CART.map(item=>{
                const storeItems=CART.get(item.id)
                return{
                    price_data:{
                        currency:'usd',
                        product_data:{
                            name:storeItems.name
                        },
                        amount:storeItems.amount * 100,
                        quantity:item.quantity
                    }
                }
            })

        })
        res.json({url:session.url})
    }
    catch(e){
res.status(500).json({error:e.message})
    }

})

module.exports = router;
