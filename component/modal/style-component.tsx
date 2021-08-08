import styled from 'styled-components';

export const ModalContainer = styled.div`
  background: #ffffff;
  border: 4px solid #e4e4e4;
  box-sizing: border-box;
  position: absolute;
  z-index: 1000;
  right: 5rem;
  width: 40%;

  .body {
    margin: 24px;
  }
  .close-button {
    position: absolute;
    top: 5px;
    right: 9px;
  }
`;
