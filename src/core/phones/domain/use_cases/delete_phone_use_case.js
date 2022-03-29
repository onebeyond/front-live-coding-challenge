import { PhoneReposiory } from 'core/phones/data/repositories/phone_repositories';

const DeletePhoneUseCase = async (phoneId) => await PhoneReposiory.deletePhone(phoneId);

export {DeletePhoneUseCase};
