import Link from 'next/link';
import styled from 'styled-components';

export const CharacterContainer = styled.div`
  margin: 26px auto 0;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
`;

export const AddFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.gray800};
  color: ${props => props.theme.colors.orange};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
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

export const Name = styled.h1`
  color: ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin: 26px auto;
  text-align: center;
`;
