import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

function mapStateToProps (state){
    console.log(state);
    return{
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

    const handleRemove = (id) => {
        props.removeItem(id);
    }
    const handleAddQuantity = (id) => {
        props.addQuantity(id);

    }
    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    }
    console.log("length",props );
    let addedItems = props.items.length ?
        (
            props.items.map(item => {
                return (
                    <li className="collection-item avatar" key={item.id}>
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
                                <Link to="/cart"><i className="material-icons" onClick={() => { handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={() => { handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove">Remove</button>
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
        </div>
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(Cart)
