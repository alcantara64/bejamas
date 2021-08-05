import React from 'react';
import { Card } from 'react-bootstrap';
import { CardContainer } from './style-component';
import Product from '../../assets/images/product-image.svg';
export default function index() {
  return (
    <CardContainer>
      <Card.Img variant="top" src={Product} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </CardContainer>
  );
}
