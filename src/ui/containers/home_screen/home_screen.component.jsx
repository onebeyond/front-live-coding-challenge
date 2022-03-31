import React, { useEffect, memo } from 'react';

import { HomeScreenStyled, TitleStyled } from './home_screen.styled';

import { PhoneCard } from 'ui/containers/home_screen/components/phone_card';

import { usePhoneContext } from 'ui/store/context/phone_context';

const HomeScreen = memo(() => {
  const { fetchAllPhones, phones } = usePhoneContext();

  useEffect(() => {
    fetchAllPhones();
  }, []);

  const renderPhoneList = () => {
    if (!phones?.length) {
      return null;
    }
    return phones.map(phone => <PhoneCard key={phone.id} phone={phone} />)
  }

  return (
    <HomeScreenStyled>
      <TitleStyled>Coolest Phone List</TitleStyled>
      {renderPhoneList()}
    </HomeScreenStyled>
  )
});

export { HomeScreen };
