import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ErrorHandler } from 'common/utils/error_handler';
import { GetPhoneLisUseCase } from 'core/phones/domain/use_cases'

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

  const fetchAllPhones = useCallback(async () => {
    //@TODO  add error handler
    try {
      const res = await GetPhoneLisUseCase();
      if (res.data) {
        setState({...state, phones: res.data})
      }
    } catch(e) {
      ErrorHandler(e);
    }
  }, []);

  const fetchPhoneById = useCallback(async(id) => {
    //@TODO  add error handler
    const selectedPhone = await GetPhoneLisUseCase(id);
    setState({...state, selectedPhone})
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