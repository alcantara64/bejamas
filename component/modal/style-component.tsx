import styled from 'styled-components';
import Metrics from '../../theme/metrics';
const { breakPoints } = Metrics;

export const ModalContainer = styled.div`
  background: #ffffff;
  border: 4px solid #e4e4e4;
  box-sizing: border-box;
  position: absolute;
  z-index: 1000;
  right: 5rem;
  width: 40%;

  @media ${breakPoints.xs} {
    width: 100%;
    right: 1rem;
  }
  .cancel-button {
    width: 100%;
    background: white;
    color: black;
    border: 3px solid #000000;
  }
  .body {
    margin: 24px;
  }
  .close-button {
    position: absolute;
    top: 5px;
    right: 9px;
  }
`;
