import { PhoneReposiory } from 'core/phones/data/repositories/phone_repositories';

const GetPhoneByIdUseCase = async (id) => await PhoneReposiory.fetchPhoneById(id);

export { GetPhoneByIdUseCase };
