import styled from 'styled-components';

export const FilterForm = styled.form`
  margin: 26px auto 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  padding: 0 26px;
  gap: 8px;

  > div {
    width: 100%;
    > input {
      width: 100%;

      padding: 8px;
      border: 1px solid ${props => props.theme.colors.green100};
      border-radius: 8px;
    }
    > span {
      font-size: ${props => props.theme.fontSizes.sm};
      color: ${props => props.theme.colors.orange};
    }
  }

  > button {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: none;
    color: ${props => props.theme.colors.gray900};
    font-size: ${props => props.theme.fontSizes.md};
    background: ${props => props.theme.colors.blue};
    padding: 9px 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const CharContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  margin: auto;
  padding: 26px;
  flex-wrap: wrap;
  gap: 26px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 12px;
  margin-bottom: 56px;
`;

export const BackButton = styled.button`
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.colors.gray900};
  font-size: ${props => props.theme.fontSizes.sm};
  background: ${props => props.theme.colors.yellow};
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageCount = styled.input`
  padding: 10px;
  max-width: 75px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray100};
  background: ${props => props.theme.colors.gray800};
  border: none;
`;

export const NextButton = styled.button`
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.colors.gray900};
  font-size: ${props => props.theme.fontSizes.sm};
  background: ${props => props.theme.colors.blue};
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
