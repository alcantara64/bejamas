import {
  HeaderContainer,
  HorizontalLine,
  SellerContainer,
  PhotoOfTheDayContainer,
  ProductContainer,
} from './style';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg';
import CartLogo from '../../assets/images/cart-logo.svg';
import LargeImage from '../../assets/images/test.svg';
import RelatedImage from '../../assets/images/related-item.svg';
import SortImage from '../../assets/images/sort-icon.svg';
import AppButton from '../button';
import { Col, Row, Form } from 'react-bootstrap';
import Card from '../card';

const HomePage = () => (
  <>
    <HeaderContainer>
      <Image src={Logo} alt="logo" />
      <Image src={CartLogo} alt="Cart logo" />
    </HeaderContainer>
    <HorizontalLine />
    <PhotoOfTheDayContainer>
      <div className="photo-action-row">
        <h2>Samurai King Resting</h2>
        <AppButton text="ADD TO CART " />
      </div>
      <div className="image-container">
        <Image className="image-container" src={LargeImage} alt={'Samuel '} />
        <div className="text-overlay">Photo of the Day</div>
      </div>
      <Row className="info-container">
        <Col md="7" xl="7" xs="12" sm="12" className="text-description">
          <h3>About the Samurai King Resting</h3>
          <p>Pets</p>
          <p>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </p>
        </Col>
        <Col xs="12" sm="12" md="5" className="related-items">
          <h3>People also buy</h3>
          <div className="related-text">
            <Image src={RelatedImage} alt={'Samuel '} />
          </div>
          <div className="related-text">
            <Image
              className="related-text"
              src={RelatedImage}
              alt={'Samuel '}
            />
          </div>
          <div className="related-text">
            <Image
              className="related-text"
              src={RelatedImage}
              alt={'Samuel '}
            />
            <div className="extra-info-container">
              <h3>Details</h3>
              <div>
                <span>Size</span>: <span> 1020 x 1020 pixel</span>
              </div>
              <div>
                <span>Size</span>: <span> 15 MB</span>
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
        <Card />
        <Card />
        <Card />
      </div>
    </ProductContainer>
  </>
);
export default HomePage;
