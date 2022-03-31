import styled from 'styled-components';
import { spacing, colors } from 'ui/styles';

export const DefaultButtonStyled = styled.div`
  width: fit-content;
  height: fit-content;
  padding: ${spacing.s}px; ${spacing.m}px;
  border: 1px solid ${colors.primary};
  border-radius: ${spacing.l}px;
`;