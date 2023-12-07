import Link from 'next/link';
import styled from 'styled-components';

export const CharContent = styled(Link)`
  border: 2px solid ${props => props.theme.colors.green100};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: ${props => props.theme.colors.gray100};
  transition: all 0.2s;
  margin-bottom: 0;
  background: ${props => props.theme.colors.gray800};

  position: relative;

  &:hover {
    transform: translateY(-03%);
  }

  > span {
    display: block;
    padding: 1rem;
    text-align: center;
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

export const AddFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5%;
  right: 5%;
  background: ${props => props.theme.colors.gray800};
  color: ${props => props.theme.colors.orange};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
