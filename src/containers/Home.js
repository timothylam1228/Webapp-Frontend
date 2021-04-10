import React, { Suspense } from 'react';
import logo from '../assets/dragon.png';
import '../App.css';
import { Img } from 'react-image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { addToCart } from '../components/actions/cartActions'


function handleClick(id) {
  this.props.addToCart(id);
}

function mapStateToProps(state) {
  return { items: state.items }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

function Home(props) {
  let itemList = props.items.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)
