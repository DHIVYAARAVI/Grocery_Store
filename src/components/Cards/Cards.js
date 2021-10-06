import React from 'react';
import {
  Card, CardImg, CardBody, CardSubtitle, Button
} from 'reactstrap';
import img7 from '../../images/13.png'
import img8 from '../../images/15.png'
import img9 from '../../images/16.png'
import img10 from '../../images/17.png'
import img11 from '../../images/18.jpg'
import img12 from '../../images/19.png'
import img13 from '../../images/20.png'
import img14 from '../../images/21.png'
import img15 from '../../images/22.png'
import img16 from '../../images/23.png'
import img17 from '../../images/24.png'
import img18 from '../../images/25.png'
import img19 from '../../images/26.png'
import img20 from '../../images/27.png'
import img21 from '../../images/28.png'
import img22 from '../../images/29.png'
import './cards.css'

const carditems = [
  {
    src: img20,
    topic: "Spinach",
    money: "$10.00",
  },
  {
    src: img19,
    topic: "Capsicum",
    money: "$40.00",
  },
  {
    src: img17,
    topic: "Chicken Breasts",
    money: "$50.00",
  },
  {
    src: img16,
    topic: "Rice",
    money: "$70.00",
  },
  {
    src: img15,
    topic: "Potato",
    money: "$50.00",
  },
  {
    src: img14,
    topic: "Badam",
    money: "$50.00",
  },
  {
    src: img18,
    topic: "Eggs",
    money: "$30.00",
  },
  {
    src: img13,
    topic: "Mushroom",
    money: "$40.00",
  },
  {
    src: img7,
    topic: "Apple",
    money: "$40.00",
  },
  {
    src: img8,
    topic: "Watermelon",
    money: "$30.00",
  },
  {
    src: img21,
    topic: "Cookies",
    money: "$40.00",
  },
  {
    src: img22,
    topic: "Grapes",
    money: "$50.00",
  },
]

const proitems = [
  {
    src: img9,
    text: "Milk",
  },
  {
    src: img10,
    text: "Vegies",
  },
  {
    src: img11,
    text: "Fruits",
  },
  {
    src: img12,
    text: "Meat",
  },
  {
    src: img18,
    text: "Eggs",
  },
]

const Example = (props) => {

  const Cards = carditems.map((carditem) => {
    return(
      <Card className="cards">
          <CardImg src={carditem.src} className="img8"/>
          <CardBody className="cards_text">
            <CardSubtitle>{carditem.topic}</CardSubtitle>
            <div>{carditem.money}</div>
            <Button className="cards_btn">Add Carts</Button>
          </CardBody>
        </Card>
    )
  });

  const products = proitems.map((proitem) =>{
    return(
        <div className="pro_images">
            <div>
                <img src={proitem.src} className="img"/>
                <div className="left">{proitem.text}</div>
            </div>
        </div>
    )
  });

  return (
    <div className="products">
        <h1 className="pro_h1">Products</h1>
        <div className="pro_head">
          {products}
        </div>        
        <div>
          {Cards}
        </div>        
    </div>
  );
};

export default Example;