import { PhoneReposiory } from 'core/phones/data/repositories/phone_repositories';

const GetPhoneLisUseCase = async () => PhoneReposiory.fetchAllPhoneList();

export { GetPhoneLisUseCase };
