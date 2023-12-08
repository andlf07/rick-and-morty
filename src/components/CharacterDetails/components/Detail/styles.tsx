import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.gray800};
  border: 2px solid ${props => props.theme.colors.green100};
  margin-bottom: 26px;
  width: 100%;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;

  > strong {
    color: ${props => props.theme.colors.yellow};
    font-size: ${props => props.theme.fontSizes.xl};
    text-align: center;
  }

  > span {
    text-align: center;
    font-size: ${props => props.theme.fontSizes.md};
  }
`;
