import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Color from '../../theme/color';

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
    padding: 15px 5px;
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
`;
export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap; /* NEW */
  .category {
    flex: 1 0 20%;
    margin: 5px;
  }
  .products {
    display: flex;
  }
`;
