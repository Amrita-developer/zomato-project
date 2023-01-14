import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../Styles/Cartlist.css';
const Cartlist = ({ cart, handleShow }) => {

    const [CART, setCART] = useState([]);
    useEffect(() => {
        setCART(cart)
    }, [cart])

    let amount = CART.map(item => item.cost * item.quantity).reduce((total, value) => total + value, 0)
    console.log("Amount " + amount)

    const makePayment = token => {
        const body = {
            token,
            CART
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`http://localhost:8009/payment/create-checkout-session`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            //     .then(response => {
            //         console.log("Response", response)
            //         const { status } = response;
            //         console.log("Status is", status)
            //    if(status===200)
            //     {
            //     alert("successful payment"); 

            // }
            // else {alert("Payment Failed")}

            //     })
            //         .catch(error => console.log(error))

            .then((res) => {
                if (res.ok) {
                    return res.json();

                }
                return res.json().then(json => Promise.reject(json))
            })
            // .then(({ url }) => {
            //     window.location.origin = url
            // })
            .catch(e => console.log(e))
    }


    return (

        <>
            <div className='container shop-cart' onClick={() => handleShow(false)}>Order Food Item</div>
            <div className='mt-3 '>

                {
                    CART?.map((cartItem, cartindex) => {
                        return (
                            <div className='container overlay'>
                                <div className='cart-img'>
                                    <img src={"http://localhost:4500/images/" + cartItem.item_image} width={50} classnName="overlay-img" />
                                </div>
                                <div className='item-name'>
                                    <span >{cartItem.item_name}</span>
                                </div>

                                <div className='item-quantity'>
                                    <button className="item-quantity-minus" onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                        })
                                        setCART(_CART)
                                    }}

                                    >-</button>
                                    <span className="item-quantity-plus">{cartItem.quantity}</span>
                                    <button onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                        })
                                        setCART(_CART)
                                    }}

                                    >
                                        +</button>
                                </div>
                                <div className='item-cost'>
                                    <span > $ {cartItem.cost * cartItem.quantity} </span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='container total-cost'>
                    <p >Total price of cart food-items:$

                        {
                            CART.map(item => item.cost * item.quantity).reduce((total, value) => total + value, 0)

                        }

                    </p>

                    <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={makePayment}
                        name="Order Food"
                        amount={amount * 100}
                    // shippingAddress
                    // billingAddress
                    >
                        <button className='pay-btn'>PAY</button>
                    </StripeCheckout>

                </div>

            </div >



        </>

    )


}

export default Cartlist;