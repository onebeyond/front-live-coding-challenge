import styled from 'styled-components';
import { colors } from 'ui/styles';

export const SnackBarStyled = styled.div`
  border: 1px solid ${colors.colors};
  border-radius: 5px;
  bottom: 30px;
  color: ${colors.colors};
  font-size: 1rem;
  left: 50%;
  margin-left: -125px;
  min-width: 250px;
  padding: 16px;
  position: fixed;
  text-align: center;
  visibility: hidden;
  z-index: 1;
  ${props => `color: ${props.isError ? colors.error : colors.primary };`}
  ${props => props.message && `
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
  visibility: visible;
  `};
  ${props => !props.message && `
    opacity: 0;
    transition: visibility 0s linear .3s, opacity .3s;
    visibility: hidden;
  `};
`;