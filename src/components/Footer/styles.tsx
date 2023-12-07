import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 26px;
  background: ${props => props.theme.colors.gray800};
  margin-top: 26px;

  > p {
    margin-bottom: 26px;
    text-align: center;
  }
`;
