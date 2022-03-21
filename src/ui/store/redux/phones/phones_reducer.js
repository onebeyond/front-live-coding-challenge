import { 
  GET_PHONES, 
  GET_PHONE_BY_ID, 
  CLEAR_PHONE, 
  DELETE_PHONE
} from './phones_constants';

const initialData = {
  phones: [],
  phone: {}
};

export default function phonesReducer (state= initialData, action) {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload
      }
    case GET_PHONE_BY_ID:
      return {
        ...state,
        phone: action.payload,
      }
    case CLEAR_PHONE:
      return {
        ...state,
        phone: action.payload,
      }
    case DELETE_PHONE:
      return {
        ...state,
        phones: action.payload,
      }
    default:
      return state;
  }
}
