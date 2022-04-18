import styled from 'styled-components';
import { colors, spacing } from 'ui/styles';

export const PhoneCardStyled = styled.div`
  display: flex;
  width: 45%;
  min-width: 300px;
  height: fit-content;
  border: 1px solid ${colors.primary};
  border-radius: ${spacing.s}px;
  margin-bottom: ${spacing.m}px;
  padding: ${spacing.m}px;
  flex-direction: column;
  position: relative;
`;

export const TextStyled = styled.span`
  ${props => props.large && `font-size: ${spacing.xl}; font-weight: bold;`};
  ${props => props.medium && `font-size: ${spacing.m};`};
`;

export const SeeDetailButtonStyled = styled.div`
  height: fit-content;
  width: fit-content;
  padding: ${spacing.m}px;
  border-radius: ${spacing.xxxl}px;
  background-color: ${colors.tertiary};
  position: absolute;
  right: ${spacing.m}px;
  color: ${colors.white};
`;

export const ImageStyled = styled.img`
`;

