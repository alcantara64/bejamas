import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Color from '../../theme/color';

export const AppButton = styled(Button)`
  color: ${Color.white};
  background: ${Color.black};
  :hover {
    background: ${Color.black};
  }
`;
