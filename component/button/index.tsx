import React from 'react';
import { AppButton } from './styled-component';

export default function index({ text, className, onClick }: IProps) {
  return (
    <AppButton onClick={onClick} className={className}>
      {text}
    </AppButton>
  );
}
interface IProps {
  className?: string;
  text: string;
  onClick?: any;
}
