import styled from 'styled-components';
import { spacing } from 'ui/styles';

export const DetailScreenStyled = styled.div`
  display: flex;
  height: ${window.outerHeight}px;
  padding: ${spacing.xxxxl}px;
  ${props => !props.hasData && `
    justify-content: center;
    align-items: center;
  `}
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.span`
  ${props => props.large && `font-size: ${spacing.xl}; font-weight: bold;`};
  ${props => props.medium && `font-size: ${spacing.m};`};
  ${props => props.marginTop && `margin-top: ${spacing.m}px;`};
  margin-bottom: ${spacing.m}px;
`;

export const ImageStyled = styled.img`
`;

