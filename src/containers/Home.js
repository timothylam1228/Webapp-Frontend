import React, { Suspense, Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../components/actions/cartActions';
import { Spinner } from 'react-bootstrap';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css'
import jwt_decode from "jwt-decode";
import Background from '../assets/background.png'

function Home(props) {
  const [isLogin, setIsLogin] = React.useState(false);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      var decoded = jwt_decode(loggedInUser);
      if (decoded.type == "user") {
        console.log(decoded)
        setIsLogin(true);
      }
    }
  }, []);

  const handleClick = (id) => {
    props.addToCart(id);
  }

  const loginAlert = () => {
    alert("Please login before add item to cart");
  }

  let itemList = props.items.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img style={{   minHeight: "300px" , maxHeight:"300px"}}src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
          {isLogin ? <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { handleClick(item.id) }}><i className="material-icons">add</i></span> :
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
      <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'Repeat', width: '100%', height: '100vh', color: 'black', justifyContent:'center', display:'flex',alignItems:'center'}} >   
        <div style={{fontSize:'60px',   backgroundColor: 'white'}}>Welcome to Pet City</div>   
        </div>
        <div id="Food" className="Food" style={{background: "linear-gradient(white, #D3E8EC)", width:'100%', height:'30vh',justifyContent:'center', display:'flex',alignItems:'center'}}>
        <div style={{fontSize:'60px'}}> Pet Food </div> 
        </div>
        <div style={{backgroundColor:'#D3E8EC'}} >
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
  console.log(state);

  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return { addToCart: (id) => { dispatch(addToCart(id)) } }
}

const styles = {
	fullHeightCard: {
		height: "100%",
	},
}


export default (connect(mapStateToProps, mapDispatchToProps)(Home))

