import styled from 'styled-components';
import theme from '../../styles/theme';

export const NavBarStyles = styled.header`
  background-color: ${theme.colors.primary};
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 20px;
`;

export const BackContainer = styled.nav`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 55px;
    color: ${theme.colors.secondary};
    &:hover {
      filter: brightness(115%);
      transform: scale(1.02);
    }
  }
`;
