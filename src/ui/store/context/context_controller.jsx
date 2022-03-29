import React from 'react';
import PropTypes from 'prop-types';

import { PhoneContextProvider } from 'ui/store/context/phone_context';
 
const ContextController = ({ children }) => {
  return (
    <PhoneContextProvider>
      {children}
    </PhoneContextProvider>
  )
};

ContextController.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextController };