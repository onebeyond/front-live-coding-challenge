import React from 'react';
import PropTypes from 'prop-types';

import { PhoneContextProvider } from './phone_context';
import { SnackbarContextProvider } from './snackbar_context';
 
const ContextController = ({ children }) => {
  return (
    <SnackbarContextProvider>
      <PhoneContextProvider>
        {children}
      </PhoneContextProvider>
    </SnackbarContextProvider>
  )
};

ContextController.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextController };