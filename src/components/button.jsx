import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

function Button({ children, disabled, link, size }) {
  return (
    <Link to={link}>
      <ButtonComponent size={size} disabled={disabled}>
        {children}
      </ButtonComponent>
    </Link>
  );
}

export default Button;

const big = css`
  border: 0;
  width: 100%;
  height: 56px;
  border-radius: 40px;
  background-color: var(--primary-100);
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;

const small = css`
  border: 0;
  width: fit-content;
  height: 40px;
  padding: 12px 23px;
  border-radius: 8px;
  background-color: var(--primary-100);
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;
const ButtonComponent = styled.button`
  ${({ size }) => {
    if (size === 'button-big') {
      return big;
    } else if (size === 'button-small') {
      return small;
    }
  }}
`;
