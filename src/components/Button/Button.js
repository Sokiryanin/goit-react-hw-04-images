import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick }) => {
  return <ButtonStyled onClick={() => onClick()}>Load more</ButtonStyled>;
};
