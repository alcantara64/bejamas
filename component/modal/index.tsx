import React from 'react';
import { ModalContainer } from './style-component';

const Modal: React.FC<IModalProps> = ({ children, show, onClose }) => {
  if (show) {
    return (
      <ModalContainer>
        <div className="close-button" onClick={onClose}>
          X
        </div>
        <div className="body">{children}</div>
      </ModalContainer>
    );
  }
  return null;
};
interface IModalProps {
  onClose: any;
  show: boolean;
}
export default Modal;
