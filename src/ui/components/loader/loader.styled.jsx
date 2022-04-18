import styled from 'styled-components';
import { colors, spacing } from 'ui/styles';

export const LoaderStyled = styled.div`
  opacity: 1;
  width: fit-content;
  border: 1px solid ${colors.primary};
  padding: ${spacing.xxl}px ${spacing.xxxxxl}px;
  animation: fade 3s linear;
  color: ${colors.primary};
  border-radius: ${spacing.xl}px;
  @keyframes fade {
    0%,50%,100% { opacity: 0 }
    25%, 75% { opacity: 1 }
  }
`;