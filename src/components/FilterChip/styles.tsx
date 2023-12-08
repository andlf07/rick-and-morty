import styled from 'styled-components';

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const FilteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 26px auto 0;
  text-align: center;
  padding: 8px;
  font-size: ${props => props.theme.fontSizes.sm};
`;

export const FilterSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.gray800};
  padding: 8px;
  border-radius: 16px;
  margin-top: 8px;
`;

export const ClearButton = styled.button`
  height: 22px;
  background: transparent;
  border: 0;
  padding: 3px;
  color: ${props => props.theme.colors.gray100};
  cursor: pointer;
`;
