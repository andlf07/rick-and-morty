import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 26px;
  background: ${props => props.theme.colors.gray800};
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 130px;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  gap: 8px;
  align-items: center;

  @media (max-width: 319px) {
    flex-direction: column;
    padding-bottom: 20px;

    > div {
      max-width: 100%;
    }
  }
`;

export const ToggleTheme = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.blue500};
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: ${props => props.theme.colors.gray100};
    transition: 0.4s;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .input:checked + .slider {
    background-color: ${props => props.theme.colors.blue};
  }

  .input:focus + .slider {
    box-shadow: 0 0 1px ${props => props.theme.colors.blue};
  }

  .input:checked + .slider:before {
    transform: translateX(30px);
  }
`;
