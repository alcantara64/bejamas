import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Color from '../../theme/color';

export const AppButton = styled(Button)`
  color: ${Color.white};
  background: ${Color.black};
  border-color: ${Color.black};
  border-radius: 0px;
  cursor: pointer;
  :hover {
    background: ${Color.black};
  }
  .no-display {
    display: none;
  }
`;
