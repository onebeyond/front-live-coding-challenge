import { PhoneReposiory } from 'core/phones/data/repositories/phone_repositories';

const GetPhoneLisUseCase = async () => await PhoneReposiory.fetchAllPhoneList();

export { GetPhoneLisUseCase };
