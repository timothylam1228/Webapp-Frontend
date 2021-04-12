import React, { Component, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51IeNf0KCNLyTjKjF1y4LFA9L3pu9v5fYfKCdtKESjGar2AseIJdxY3TCI5shVUSdmVpG49BKeT7dTUcLuSi3NeoW00a5Y4y33P');



function Recipe(props) {
    const axios = require('axios').default;
    useEffect(() => {
        // Update the document title using the browser API

    });



    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        // const response = await fetch('/dev/create-checkout-session', { method: 'POST' });
        axios.post('http://localhost:3000/dev/create-checkout-session')
            .then(function (response) { console.log(response) });

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
        <div className="container">
            <div className="collection">
                <li className="collection-item"><b>Total: {props.total} $</b></li>
            </div>
            <div className="checkout">
                <button className="waves-effect waves-light btn"  onClick={() => { handleClick() }}>Checkout</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)