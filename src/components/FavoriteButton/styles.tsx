import Link from 'next/link';
import styled from 'styled-components';

export const FavoritesListButton = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: none;
  position: relative;
  color: ${props => props.theme.colors.gray900};
  font-size: ${props => props.theme.fontSizes.md};
  background: ${props => props.theme.colors.blue};
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  > span {
    position: absolute;
    right: -8.35px;
    top: -8px;
    width: 20px;
    height: 20px;
    padding: 2px;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.gray100};
    background: ${props => props.theme.colors.green800};
    font-weight: 700;
    border-radius: 1000px;
    text-align: center;
  }
`;
