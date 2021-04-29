import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axios = require('axios').default;


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod);
            //send token to backend here
        } else {
            console.log(error.message);
        }
    };
    const handleClick = async (event) => {
        // Get Stripe.js instance
        // const stripe = await stripePromise;
        // Call your backend to create the Checkout Session
        // const response = await fetch('/dev/create-checkout-session', { method: 'POST' });
        // axios.post('http://localhost:3000/dev/create_checkout_session')
        //     .then(function (response) { console.log(response) });

        // const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        // const result = await stripe.redirectToCheckout({
        //   sessionId: session.id,
        // });

        // if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        // }
    };
    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement />
        </form>
    );
};