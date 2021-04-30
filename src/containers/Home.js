import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../components/actions/cartActions';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css'
import jwt_decode from "jwt-decode";
import Background from '../assets/background.png'
import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Loader } from 'semantic-ui-react'

function Home(props) {
  console.log(props.items)
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      var decoded = jwt_decode(loggedInUser);
      if (decoded.type === "user") {
        console.log(decoded)
        setIsLogin(true);
      }
    }
  }, []);

  const handleClick = (id) => {
    console.log('id', id);
    props.addToCart(id);
  }

  const loginAlert = () => {
    alert("Please login before add item to cart");
  }

  if (props.items == null) {
    return (
      <Dimmer active>
        <Loader inverted content='Loading' />
      </Dimmer>
    )
  }
  console.log('props.items', props.items.body)
  let itemList = props.items.body.map(item => {
    return (
      <div className="card" key={item._id}>
        <div className="card-image">
          <img style={{ minHeight: "300px", maxHeight: "300px" }} src={item.img} alt={item.title} />
          <span className="card-title" style={{ color: 'black' }}>{item.title}</span>
          {isLogin ? <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { handleClick(item._id) }}><i className="material-icons">add</i></span> :
            <span to="/" className="btn-floating halfway-fab grey" onClick={() => { loginAlert() }}><i className="material-icons">add</i></span>
          }
        </div >
        <div className="card-content">
          <p>{item.desc}</p>
          <p><b>Price: {item.price}$</b></p>
        </div>
      </div >
    )
  })

  return (
    <>
      <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'Repeat', width: '100%', height: '100vh', color: 'black', justifyContent: 'center', display: 'flex', alignItems: 'center' }} >
        <div style={{ fontSize: '60px', backgroundColor: 'white', lineHeight :'100%'}}>Welcome to Pet City</div>
      </div>
      <div id="Food" className="Food" style={{ background: "linear-gradient(white, #D3E8EC)", width: '100%', height: '30vh', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '60px' }}> Pet Food </div>
      </div>
      <div style={{ backgroundColor: '#D3E8EC' }} >
        <div className="container">
          <div className="box">
            {itemList}
          </div>
        </div>
      </div>
    </>


  );
}
function mapStateToProps(state) {
  console.log('state', state)
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return { addToCart: (id) => { dispatch(addToCart(id)) } }
}




export default (connect(mapStateToProps, mapDispatchToProps)(Home))

