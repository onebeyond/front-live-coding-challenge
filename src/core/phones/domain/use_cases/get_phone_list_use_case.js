import { PhoneReposiory } from '../../data/repositories/phone_repositories';

const GetPhoneLisUseCase = async () => {
  return await PhoneReposiory.fetchAllPhoneList();
};

export {GetPhoneLisUseCase};
