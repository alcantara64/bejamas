import React from 'react';
import { Card } from 'react-bootstrap';
import { CardContainer, BestSeller } from './style-component';
import Button from '../button';
//import Product from '../../assets/images/product-1.jpg';
//{imageUrl,onAddToCart, category, name, price }
export default function index({
  bestSeller,
  category,
  price,
  currency,
  name,
  onAddToCart,
}: any) {
  return (
    <CardContainer>
      <div className="card-image-container">
        <Card.Img variant="top" src="../../assets/images/product-1.jpg" />
        {bestSeller && <BestSeller>Best Seller</BestSeller>}
        <Button
          text="ADD TO CART"
          className="no-display"
          onClick={onAddToCart}
        />
      </div>
      <Card.Body>
        <Card.Text className="item-category">{category}</Card.Text>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="item-price">{`${currency} ${price}`}</Card.Text>
      </Card.Body>
    </CardContainer>
  );
}
