import ApiNetwork from 'common/network/api_network';

const PhoneReposiory = {
  fetchAllPhoneList: async () => await ApiNetwork.get('/phones'),
  fetchPhoneById: async (id) => await ApiNetwork.get(`/phones/${id}`),
  deletePhone: async (phoneId, photoId) =>  await ApiNetwork.post(`phones/delete/${phoneId}`, {photoId}),
};

export {PhoneReposiory};
