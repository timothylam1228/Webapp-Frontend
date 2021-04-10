import React, { Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../components/actions/cartActions';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css'



function Home(props) {

  const handleClick = (id) => {
    console.log("add button click");
    props.addToCart(id);
  }

  let itemList = props.items.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { handleClick(item.id) }}><i className="material-icons">add</i></span>
        </div >
        <div className="card-content">
          <p>{item.desc}</p>
          <p><b>Price: {item.price}$</b></p>
        </div>
      </div >
    )
  })
  return (

    <div className="container">
      <div className="box">
        {itemList}
      </div>
    </div>


  );
}
function mapStateToProps(state) {
  console.log(state);

  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return { addToCart: (id) => { dispatch(addToCart(id)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
