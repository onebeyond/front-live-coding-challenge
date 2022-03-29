import styled from 'styled-components';
import { colors, spacing } from 'ui/styles';

export const PhoneCardStyled = styled.div`
  border: 1px solid ${colors.primary};
  border-radius: ${spacing.s}px;
  margin-bottom: ${spacing.m}px;
  height: ${spacing.xxxxl * 8}px;
  padding: ${spacing.m}px;
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.span`
  ${props => props.large && `font-size: ${spacing.xl}; font-weight: bold;`};
  ${props => props.medium && `font-size: ${spacing.m};`};
  ${props => props.small && `font-size: ${spacing.s};`};
`;

export const ImageStyled = styled.img`

`;

