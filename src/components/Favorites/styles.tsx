import Link from 'next/link';
import styled from 'styled-components';

export const FavoritesContent = styled.div`
  width: 100%;
  max-width: 520px;
  background: ${props => props.theme.colors.gray900};
  padding: 0 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  min-height: calc(100vh - 260px);

  h2 {
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.gray100};
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;
    flex: 1;
    width: 100%;
  }

  @media (max-width: 300px) {
    h2 {
      font-size: ${props => props.theme.fontSizes.sm};
    }
  }
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  height: 100%;
  width: 100%;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #fff;
  border-radius: 8px;
  text-transform: none;
  text-decoration: none;
  border: none;
  color: ${props => props.theme.colors.gray800};
  background: ${props => props.theme.colors.blue};
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
  margin: 26px auto;
`;

export const FavoritesChar = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${props => props.theme.colors.blue};
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.colors.gray800};
  gap: 1.25rem;
  text-decoration: none;
  text-transform: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-03%);
  }
`;

export const FavoritesCharDetails = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-around;

  @media (max-width: 369px) {
    flex-direction: column;
  }

  p {
    color: ${props => props.theme.colors.gray100};
    font-size: md;
  }

  strong {
    margin-top: 4;
    font-size: md;
    font-weight: 700;
  }

  button {
    margin-top: 25;
    width: max-content;
    color: ${props => props.theme.colors.orange};
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
