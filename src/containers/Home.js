import React, { Suspense } from 'react';
import logo from '../assets/dragon.png';
import '../App.css';
import { Img } from 'react-image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';



function mapStateToProps(state) {
  return { items: state.items }
}

function Home() {
  let itemList = this.props.items.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                        </div >
    <div className="card-content">
      <p>{item.desc}</p>
      <p><b>Price: {item.price}$</b></p>
    </div>
                 </div >
    )
})


return (
  <div className="homeImage">
    <Container>
      <Row>
        <Col>
          <h1>Banner</h1>
          <Img
            src={logo} /></Col>
      </Row>
      <div className="box">
        {itemList}
      </div>
    </Container>

  </div>
);
}

export default connect(mapStateToProps)(Home)
