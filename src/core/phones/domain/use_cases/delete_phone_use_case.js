import { PhoneReposiory } from '../../data/repositories/phone_repositories';

const DeletePhoneUseCase = async (phoneId, photoId) => {
  try {
    await PhoneReposiory.deletePhone(phoneId, photoId);
    return true;
  } catch (e) {
    return false;
  }
};

export {DeletePhoneUseCase};
