import {
  HeaderContainer,
  HorizontalLine,
  SellerContainer,
  PhotoOfTheDayContainer,
  ProductContainer,
  H1,
  Paragraph,
  LargeText,
  CartItem,
} from './style';
import Image from 'next/image';
import Logo from '../../svgs/logo.svg';
import CartLogo from '../../svgs/cart-logo.svg';
import LargeImage from '../../svgs/big-product.svg';
import SortImage from '../../svgs/sort-icon.svg';
import AppButton from '../button';
import { Col, Row, Form, Badge } from 'react-bootstrap';
import Card from '../card';
import Images from '../../theme/image';
import Colors from '../../theme/color';
import React, { useEffect, useState } from 'react';
import db from '../../firebase.config';
import { IProduct } from '../../model/profuct';
import Modal from '../modal';
const HomePage = () => {
  const [cartItems, SetCartItem] = useState<Array<IProduct>>([]);
  const [featuredProduct, setFeaturedProduct] = useState<IProduct | null>(null);
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCartModal, setShowCarModal] = useState<boolean>(false);
  const fetchProducts = async (orderBy = 'name') => {
    const response = db.ref('products').orderByChild(orderBy);
    response.once('value').then(function (snapshot: any) {
      const products = snapshot.val().filter((item: any) => {
        return item.name !== undefined;
      });
      const featuredProduct = products?.filter((product: any) => {
        return product.featured === true;
      });
      console.log('products ==>', products, snapshot.val()[0].name);
      setFeaturedProduct(featuredProduct[0]);
      setProducts(products);
    });
  };
  const addToCart = (item: IProduct) => {
    if (!cartItems.find((product) => product.id === item.id)) {
      const newCarItems = [...cartItems, ...[item]];
      SetCartItem(newCarItems);
      setShowCarModal(true);
    }
  };
  const clearCart = () => {
    SetCartItem([]);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      <HeaderContainer>
        <Image src={Logo} alt="logo" />
        <div
          className="add-cart-container"
          onClick={() => {
            setShowCarModal(!showCartModal);
          }}
        >
          <Image src={CartLogo} alt="Cart logo" />
          {cartItems.length > 0 && (
            <Badge bg="secondary">{cartItems.length}</Badge>
          )}
          <Modal
            onClose={() => {
              setShowCarModal(false);
            }}
            show={showCartModal}
          >
            {' '}
            <CartItem>
              <div className="cart-name">
                <H1>Samurai King Resting</H1>
              </div>
              <Image
                src={CartLogo as any}
                alt="CartItem"
                width="540"
                height={614}
              />
            </CartItem>
          </Modal>
        </div>
      </HeaderContainer>
      <HorizontalLine />
      <PhotoOfTheDayContainer>
        <div className="photo-action-row">
          <H1>{featuredProduct?.name}</H1>
          <AppButton onClick={addToCart} text="ADD TO CART " />
        </div>
        <div className="image-container">
          <Image
            className="image-container"
            src={LargeImage}
            alt={'photo of the day '}
          />
          <div className="text-overlay">Photo of the Day</div>
        </div>
        <Row className="info-container">
          <Col md="7" xl="7" xs="12" sm="12" className="text-description">
            <LargeText>About the {featuredProduct?.name}</LargeText>
            <Paragraph className="light">{featuredProduct?.category}</Paragraph>
            <Paragraph color={Colors.darkGrey}>
              {featuredProduct?.details?.description}
            </Paragraph>
          </Col>
          <Col xs="12" sm="12" md="5" className="related-items">
            <div className="display-container">
              <LargeText>People also buy</LargeText>
              <div className="related-text">
                <Image
                  src={Images.productOne as any}
                  alt={'product one '}
                  width={540}
                  height={160}
                />
              </div>
              <div className="related-text">
                <Image
                  className="related-text"
                  src={Images.productOne as any}
                  alt={'product two '}
                  width={540}
                  height={160}
                />
              </div>
              <div className="related-text">
                <Image
                  className="related-text"
                  src={Images.productOne as any}
                  alt={'product 3 '}
                  width="100%"
                  height="100%"
                />
                <div className="extra-info-container">
                  <LargeText>Details</LargeText>
                  <div>
                    <span>Size</span>:{' '}
                    <span>
                      {' '}
                      {featuredProduct?.details?.dimmentions.width} pixel
                    </span>
                  </div>
                  <div>
                    <span>Size</span>:{' '}
                    <span>{featuredProduct?.details?.size}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </PhotoOfTheDayContainer>
      <HorizontalLine />
      <SellerContainer>
        <div className="header-container">
          <div className="header-text">
            <span className="description-divider">
              <span>Photography</span> / {''}
              <span>Premium Photos</span>
            </span>
          </div>
          <div className="filter-container">
            <span className="sort-icon">
              <Image src={SortImage} alt="Sort icon" />
            </span>
            <span className="select-container">
              <select>
                <option>price</option>
                <option>Alphabet</option>
              </select>
            </span>
          </div>
        </div>
      </SellerContainer>
      <ProductContainer>
        <div className="category">
          <h5>Categories</h5>
          <Form.Check
            type="checkbox"
            id={`default-checkbox`}
            label={`default checkbox`}
          />
          <Form.Check
            type="checkbox"
            id={`default-checkbox`}
            label={`default checkbox`}
          />
        </div>
        <div className="products">
          {products.map((item) => (
            <Card
              key={item.id}
              bestSeller={item.bestseller}
              category={item.category}
              price={item.price}
              currency={item.currency}
              name={item.name}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </ProductContainer>
    </>
  );
};
export default HomePage;
