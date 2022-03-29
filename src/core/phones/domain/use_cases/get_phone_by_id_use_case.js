import { PhoneReposiory } from 'core/phones/data/repositories/phone_repositories';

const GetPhoneByIdUseCase = async () => await PhoneReposiory.fetchPhoneById();

export { GetPhoneByIdUseCase };
