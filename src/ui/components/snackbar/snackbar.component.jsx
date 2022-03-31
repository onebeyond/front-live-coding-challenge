import React from 'react';

import { SnackBarStyled } from './snakbar.styled';
  
import { useSnackbarContext } from 'ui/store/context/snackbar_context';

const Snackbar = () => {
  const { message, isError } = useSnackbarContext();
  
  return (
    <SnackBarStyled message={message} isError={isError}>
      {message}
    </SnackBarStyled>
  )
};

export { Snackbar };
