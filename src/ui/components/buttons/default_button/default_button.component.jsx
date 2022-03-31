import React from 'react';
import PropTypes from 'prop-types';

import { DefaultButtonStyled } from './default_button.styled';

const DefaultButton = ({ onClick, children }) => {
  return (
    <DefaultButtonStyled onClick={onClick}>
      {children}
    </DefaultButtonStyled>
  )
}

DefaultButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export { DefaultButton };