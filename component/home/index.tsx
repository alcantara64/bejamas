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
  RelatedImagesContainer,
  PaginationContainer,
  Pagination,
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
  const [currentStartAt, setCurrentStartAt] = useState(1);
  const fetchProducts = async (orderBy = 'id', startAt = 1, limit = 7) => {
    const response = db
      .ref('products')
      .orderByChild(orderBy)
      .startAt(startAt)
      .limitToFirst(limit);
    response.once('value').then(function (snapshot: any) {
      console.log(snapshot.val());
      const products = snapshot.val().filter((item: any) => {
        return item.name !== undefined && item.featured !== true;
      });

      const featuredProduct = snapshot.val()?.filter((product: any) => {
        return product.featured === true;
      });
      debugger;
      if (featuredProduct[0]) {
        setFeaturedProduct(featuredProduct[0]);
      }
      console.log('products', products.length);
      setProducts(products);
    });
  };
  const addToCart = (item: IProduct) => {
    console.log('item ==>', item, 'cartitems ==>', cartItems);
    if (!cartItems.some((product) => product.id === item.id)) {
      const newCarItems = [...cartItems, ...[item]];
      SetCartItem(newCarItems);
    }
    setShowCarModal(true);
  };
  const clearCart = () => {
    SetCartItem([]);
    setShowCarModal(false);
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
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <div className="cart-name">
                  <H1 className="name">{item.name}</H1>
                  <Paragraph className="light">
                    {item.currency} {item.price}
                  </Paragraph>
                </div>
                <Image
                  src={`/assets/images/products-images/product-${item.image.src}.png`}
                  alt="CartItem"
                  width="149px"
                  height="86px"
                />
              </CartItem>
            ))}

            <HorizontalLine />
            <AppButton
              className="cancel-button"
              onClick={clearCart}
              text="CLEAR "
            />
          </Modal>
        </div>
      </HeaderContainer>
      <HorizontalLine />
      <PhotoOfTheDayContainer>
        <div className="photo-action-row">
          <H1>{featuredProduct?.name}</H1>
          <AppButton
            onClick={() => {
              if (featuredProduct) {
                addToCart(featuredProduct);
              }
            }}
            text="ADD TO CART "
          />
        </div>
        <div className="image-container">
          <Image
            className="image-container"
            src="/assets/images/products-images/product-01.png"
            alt={'photo of the day '}
            width="1290px"
            height="553px"
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
              <RelatedImagesContainer>
                <div className="related-text">
                  <Image
                    src="/assets/images/products-images/product-10.png"
                    alt={'product one '}
                    width="117px"
                    height="147px"
                  />
                </div>
                <div className="related-text">
                  <Image
                    className="related-text"
                    src="/assets/images/products-images/product-9.png"
                    alt={'product two '}
                    width="117px"
                    height="147px"
                  />
                </div>
                <div className="related-text">
                  <Image
                    className="related-text"
                    src="/assets/images/products-images/product-8.png"
                    alt={'product 3 '}
                    width="117px"
                    height="147px"
                  />
                </div>
              </RelatedImagesContainer>
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
          <LargeText>Categories </LargeText>
          <Form.Check type="checkbox" id={`People`} label={`People`} />
          <Form.Check type="checkbox" id={`Pets`} label={`Pets`} />
          <Form.Check type="checkbox" label={`Cities`} />
          <Form.Check type="checkbox" id={`food`} label={`Food`} />
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
              image={`../../assets/images/products-images/product-${item.image.src}.png`}
              onAddToCart={() => {
                addToCart(item);
              }}
            />
          ))}
        </div>
      </ProductContainer>
      <PaginationContainer>
        {currentStartAt > 1 && (
          <Pagination
            onClick={() => {
              const newStartAt = currentStartAt - 6;
              fetchProducts('id', newStartAt, 6);
              setCurrentStartAt(newStartAt);
            }}
          >
            Previous
          </Pagination>
        )}
        {currentStartAt < 12 && (
          <Pagination
            onClick={() => {
              const newStartAt = currentStartAt + 6;
              fetchProducts('id', newStartAt, 6);
              setCurrentStartAt(newStartAt);
            }}
          >
            Next
          </Pagination>
        )}
      </PaginationContainer>
    </>
  );
};
export default HomePage;
