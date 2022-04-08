import styled from 'styled-components';
import theme from '../../styles/theme';

export const Section = styled.section`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  border: 2px;
  width: 60%;
  background-color: ${theme.colors.gray};
`;
