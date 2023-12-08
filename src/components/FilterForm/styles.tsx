import styled from 'styled-components';

export const StyledFilterForm = styled.form`
  margin: 26px auto 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  padding: 0 26px;
  gap: 8px;

  .row-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .input-container {
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

  .input-button {
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
    height: 38px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
