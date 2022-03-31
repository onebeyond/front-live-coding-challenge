import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { GetPhoneLisUseCase, GetPhoneByIdUseCase } from 'core/phones/domain/use_cases'

import { useSnackbarContext } from 'ui/store/context/snackbar_context';

export const PhoneContext = createContext(null);

const usePhoneContext = () => {
  const context = React.useContext(PhoneContext);
  if (!context) {
    throw new Error('usePhoneContext must be used within an PhoneContextProvider');
  }
  return context;
};

const initialState = {
  phones: [],
  selectedPhone: null,
}

const PhoneContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { phones, selectedPhone } = state;

  const { setError } = useSnackbarContext();

  const fetchAllPhones = useCallback(async () => {
    try {
      const res = await GetPhoneLisUseCase();
      if (res?.data) {
        setState({ ...state, phones: res.data })
      }
    } catch(e) {
      setError(e.message);
    }
  }, []);

  const fetchPhoneById = useCallback(async(id) => {
    try {
      const res = await GetPhoneByIdUseCase(id);
      if (res?.data) {
        setState({ ...state, selectedPhone: res.data })
      }
    } catch(e) {
      setError(e.message);
    }
  }, []);

  return (
    <PhoneContext.Provider
      value={{
        phones,
        selectedPhone,
        fetchAllPhones,
        fetchPhoneById,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

PhoneContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { usePhoneContext, PhoneContextProvider };