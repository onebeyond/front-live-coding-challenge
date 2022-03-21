import { PhoneReposiory } from '../../data/repositories/phone_repositories';

const CreatePhoneUseCase = async (phoneData) => {
  try {
    //@TODO 
    // const body = CreateFormDataImage(phoneData);
    // const res = await PhoneReposiory.createPhone(body);
    // if (res) {
    //   return JSON.parse(res.data);
    // }
    return true;
  } catch (e) {
    return false;
  }
};

export {CreatePhoneUseCase};
