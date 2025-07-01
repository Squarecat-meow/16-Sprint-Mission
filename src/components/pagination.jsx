import { ReactComponent as ChevronLeft } from '../public/components/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../public/components/chevron-right.svg';
import { styled } from 'styled-components';

function Circle({ active, children, onClick }) {
  return (
    <CircleButton active={active} onClick={() => onClick()}>
      {children}
    </CircleButton>
  );
}

const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid var(--secondary-200);
  border-radius: 100%;

  ${({ active }) =>
    active &&
    `
      border: 0;
      background-color: var(--primary-200);
      color: var(--gray-100);

      &:hover {
        background-color: var(--primary-100);
      }

      &:active {
        background-color: var(--primary-300);
      }
  `}

  &:hover {
    background-color: var(--secondary-200);
  }

  &:active {
    background-color: var(--secondary-400);
  }

  &:disabled {
    background-color: var(--gray-100);
  }
`;

function Pagination({ currentPage, totalPage, callback }) {
  const pageNumberArr = Array.from({ length: totalPage }, (v, i) => i + 1);
  let slicedArr = [];

  if (currentPage % 5 === 0) {
    slicedArr = pageNumberArr.slice(currentPage - 5, currentPage);
  } else {
    slicedArr = pageNumberArr.slice(
      currentPage - (currentPage % 5),
      Math.ceil(currentPage / 5) * 5,
    );
  }

  return (
    <FooterWrapper>
      <Circle onClick={() => callback('prev')} className="circle">
        <ChevronLeft />
      </Circle>
      {slicedArr.map((el, i) => (
        <Circle
          key={i}
          onClick={() => callback(el)}
          active={currentPage === el ? true : false}
        >
          {el}
        </Circle>
      ))}
      <Circle onClick={() => callback('next')} className="circle">
        <ChevronRight />
      </Circle>
    </FooterWrapper>
  );
}

export default Pagination;

const FooterWrapper = styled.footer`
  width: 100%;
  margin: 16px 0px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
