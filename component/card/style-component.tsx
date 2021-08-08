import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Color from '../../theme/color';

export const CardContainer = styled(Card)`
  flex: 0 1 30%;
  margin: 10px 0px 0px 30px;
  width: 282.02px;
  border: 0px;
  .card-body {
    padding: 1rem 0rem;
  }
  .item-price {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: ${Color.darkGrey};
  }
  .item-category {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: ${Color.darkGrey};
  }
  .card-title {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 37px;
    color: ${Color.black};
  }
  .card-image-container {
    position: relative;
    :hover {
      button {
        display: block;
        z-index: 100;
        position: absolute;
        bottom: 0;
        width: 100%;
        cursor: pointer;
      }
    }
  }

  button {
    display: none;
  }
`;
export const BestSeller = styled.div`
  position: absolute;
  background: ${Color.white};
  padding: 2px 5% 0px 0px;
  top: 0;
`;
