import { ReactComponent as Heart } from '../public/components/heart.svg';
import { styled } from 'styled-components';

function Card({ element }) {
  return (
    <CardWrapper className="wrapper">
      <CardImage
        src={element.images[0]}
        alt={`${element.id}번째 판매 물품 대표 사진`}
      />
      <CardTextContainer className="card-text-container">
        <h2>{element.name}</h2>
        <h3>{element.price.toLocaleString()}원</h3>
        <CardFavoriteContainer className="card-favorite-container">
          <Heart height={16} width={16} />
          <span>{element.favoriteCount}</span>
        </CardFavoriteContainer>
      </CardTextContainer>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 16px;
`;

const CardTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 500;
    font-size: 14px;
    margin: 0;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    margin: 0;
  }
`;

const CardFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--secondary-600);
  font-size: 12px;
  font-weight: 500;
`;
