import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'

useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
function handleChecked(e){
    if(e.target.checked){
        this.props.addShipping();
    }
    else{
        this.props.substractShipping();
    }
}

function Recipe(){

    return(
        <div className="container">
            <div className="collection">
                <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
             </div>
    )
}

function mapStateToProps (state){
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

function mapDispatchToProps(dispatch){
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)