import ApiNetwork from '../../../../common/network/api_network';

const PhoneReposiory = {
  fetchAllPhoneList: async () => {
    return await ApiNetwork.get('/phones');
  },
  createPhone: async (body) => {
    return await ApiNetwork.postFormData('phones', body);
  },
  deletePhone: async (phoneId, photoId) => {
    return await ApiNetwork.post(`phones/delete/${phoneId}`, {photoId});
  },
  updatePhoneWithImage: async (body) => {
    return await ApiNetwork.putFormData('phones/update-with-image', body);
  },
  updatePhone: async (body) => {
    return await ApiNetwork.put('phones/update', body);
  },
};

export {PhoneReposiory};
