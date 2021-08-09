import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Color from '../../theme/color';
import Metrics from '../../theme/metrics';
const { breakPoints } = Metrics;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HorizontalLine = styled.hr`
  border: 4px solid ${Color.lightGrey};
  height: 0px;
`;
export const PhotoOfTheDayContainer = styled.div`
  padding: 0px 4px 0px 4px;
  .photo-action-row {
    display: flex;
    justify-content: space-between;
  }
  .image-container {
    padding-top: 15px;
    position: relative;
  }
  .text-overlay {
    background: ${Color.white};
    position: absolute;
    left: 0;
    bottom: 0px;
    text-align: center;
    padding: 20px 65px;
  }
  .info-container {
    display: flex;
    justify-content: space-around;
  }
  .related-items {
    display: relative;
    overflow: scroll;
    float: right;
  }
  .related-text {
    margin: 5px;
    display: inline;
  }
`;
export const SellerContainer = styled(Container)`
  .header-container {
    display: flex;
    justify-content: space-between;
  }
  select {
    border: none;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.xs} {
    flex-direction: column;
  }

  .category {
    flex: 1 1 30%;
    margin: 5px;
    @media ${breakPoints.xs} {
      flex-direction: column;
    }
  }
  .products {
    display: flex;
    flex-wrap: wrap; /* NEW */
    @media ${breakPoints.xs} {
      flex-direction: column;
    }
  }
  .form-check-input[type='checkbox'] {
    border-radius: 0px;
    border: 2px solid;
  }
`;

export const Paragraph = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: ${(props) => props.color || Color.black};
`;
export const LargeText = styled.h2`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  color: ${Color.black};
`;
export const H1 = styled.h1`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  color: ${Color.black};
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100px;
  margin-top: 10px;
  .cart-name {
    width: 222px;
  }
  .name {
    font-size: 22px;
  }
  .light {
    color: ${Color.darkGrey};
  }
`;
export const PaginationContainer = styled.div`
  text-align: center;
  color: ${Color.black};
  margin: 15px 5px;
`;
export const RelatedImagesContainer = styled.div`
  display: flex;
`;

export const Pagination = styled.span`
    margin: 15px;
    color: blue;
}
`;
