import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

export const SnackbarContext = createContext(null);

const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbarContext must be used within an SnackbarContextProvider');
  }
  return context;
};

const initialState = {
  message: null,
  isError: false,
}

const SnackbarContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { message, isError } = state;

  useEffect(() => {
    if (message?.length) {
      setTimeout(() => {
        setState(initialState);
      }, 3000);
    }
  }, [message]);

  const setError = useCallback(() => {
    setState({ 
      message: 'An error has occured. Please try again.', 
      isError: true 
    });
  }, []);

  return (
    <SnackbarContext.Provider
      value={{
        isError,
        message,
        setError
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

SnackbarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useSnackbarContext, SnackbarContextProvider };