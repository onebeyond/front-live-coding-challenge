import { 
  GET_PHONES,
  DELETE_PHONE,
} from './phones_constants';

import { 
  GetPhoneLisUseCase,
  CreatePhoneUseCase,
  DeletePhoneUseCase,
} from '../../../../core/phones/domain/use_cases';

export const getPhonesAction = () => async (dispatch, getState) => {
  const phoneList = await GetPhoneLisUseCase();
  if (phoneList) {
    dispatch({
      type: GET_PHONES,
      payload: phoneList
    });
  }
};

export const getPhonePhoneByIdAction = (id) => async (dispatch, getState) => {
  // const res = await API.get(`${REACT_APP_PHONES_URL}/${id}`);
  // dispatch({
  //   type: GET_PHONE_BY_ID,
  //   payload: res.data
  // })
};

export const clearPhoneAction = () => async(dispatch, getState) => {  
  // dispatch({
  //   type: CLEAR_PHONE,
  //   payload: {}
  // })
};

export const deletePhoneAction = (phoneId, photoId) => async (dispatch, getState) => {
  const deletedPhone = await DeletePhoneUseCase(phoneId, photoId);

  if (deletedPhone) {
    const phonesState = getState().phones.phones;
    const newPhonesState = phonesState.filter(phone => phone._id !== phoneId);

    dispatch({
      type: DELETE_PHONE,
      payload: {newPhonesState}
    })
  }
};

export const addPhoneAction = (body) => async (dispatch, getState) => {
  const addedPhone = await CreatePhoneUseCase(body);
  if (addedPhone) {
    dispatch(getPhonesAction());
  }
};
