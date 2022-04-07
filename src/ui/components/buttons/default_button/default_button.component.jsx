import React from 'react';
import PropTypes from 'prop-types';

import { DefaultButtonStyled } from './default_button.styled';

const DefaultButton = ({ onClick, children, dataCy }) => {
  console.log('render default button: dataCy')
  return (
    <DefaultButtonStyled onClick={onClick} data-cy={dataCy}>
      {children}
    </DefaultButtonStyled>
  )
}

DefaultButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  dataCy: PropTypes.string.isRequired,
}

export { DefaultButton };