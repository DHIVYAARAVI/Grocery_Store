import React from 'react';
import {
  Card, CardImg, CardBody
} from 'reactstrap';
import './shipping.css'
import img30 from '../../images/42.png'
import img31 from '../../images/43.png'
import img32 from '../../images/44.png'

const Shipping = (props) => {
  return (
    <div className="ship">
      <Card>
        <CardImg top width="100%" />
        <CardBody className="ship_card">
            <div className="ship_font">
                <img src={img30} className="ship_img"/>
                <div>Free Shipping</div>
            </div>
            <div className="ship_font">
                <img src={img31} className="ship_img" />
                <div>Helpline(000 123-4567)</div>
            </div>
            <div className="ship_font">
                <img src={img32} className="ship_img" />
                <div>24x7 Customer Support</div>
            </div>    
        </CardBody>
      </Card>
    </div>
  );
};

export default Shipping;