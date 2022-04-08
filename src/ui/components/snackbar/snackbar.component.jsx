import React from 'react';

import { SnackBarStyled } from './snakbar.styled';

const Snackbar = () => {
  const message = null;
  const isError = false;

  return (
    <SnackBarStyled message={message} isError={isError} data-cy={'snackbar'}>
      {message}
    </SnackBarStyled>
  )
};

export { Snackbar };
