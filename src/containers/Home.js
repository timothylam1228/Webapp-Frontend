import React,{Suspense} from 'react';
import loader from '../assets/kingkong.gif'; // Tell webpack this JS file uses this image
import logo from '../assets/Cat.png';
import '../App.css';
import {Img} from 'react-image'


function Home() {
  return (
    <div className="homeImage">
     <Img
    src={logo}/>
    </div>
  );
}

export default Home;
