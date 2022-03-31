import ApiNetwork from 'common/network/api_network';

const PhoneReposiory = {
  fetchAllPhoneList: async () => await ApiNetwork.get('/phones'),
  fetchPhoneById: async (id) => await ApiNetwork.get(`/phones/${id}`),
  deletePhone: async (id) =>  await ApiNetwork.delete(`phones/${id}`),
};

export {PhoneReposiory};
