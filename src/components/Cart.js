import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Recipe from './Recipe'


function mapStateToProps(state) {
    return {
        items: state.addedItems,
        total: state.total
    }
}
function mapDispatchToProps(dispatch) {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
function Cart(props) {
    const axios = require('axios').default;

    const handleRemove = (id) => {
        props.removeItem(id);
    }
    const handleAddQuantity = (id) => {
        props.addQuantity(id);

    }
    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    }
    const handleClick = async (event) => {
        console.log("props now:", props.items)
        var i;
        for (i = 0; i < props.items.length; i++) {
            axios.post('http://localhost:3000/dev/payment', ({
                title: props.items[i].title,
                price: props.items[i].price,
                quantity: props.items[i].quantity,
                method: "card"
            }))
                .then(function (response) {
                    if (response.data.message == "sucess") {
                        // alert("payment success!");
                        window.location = "/"
                    } else {
                        alert("payment failed")
                        window.location = "/cart"

                    }
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    console.log('length', props)
    let addedItems = props.items ?
        (
            props.items.map(item => {
                return (
                    <li className="collection-item avatar" key={item._id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className="" />
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons" onClick={() => { handleAddQuantity(item._id) }}>arrow_drop_up</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={() => { handleSubtractQuantity(item._id) }}>arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={() => { handleRemove(item._id) }}>Remove</button>
                        </div>

                    </li>
                )
            })
        ) :

        (
            <p>Nothing.</p>
        )

    return (
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>

            <Recipe />
            <button className="waves-effect waves-light btn" onClick={() => { handleClick() }}>Checkout</button>

        </div>
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(Cart)
