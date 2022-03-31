/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { memo, useEffect } from 'react';
import { mount } from '@cypress/react';
import { useNavigate } from 'react-router-dom';

import { HomeScreenStyled, TitleStyled } from '../ui/containers/home_screen/home_screen.styled';
import { PhoneCardStyled, TextStyled, SeeDetailButtonStyled, ImageStyled } from '../ui/containers/home_screen/components/phone_card/phone_card.styled';

import { PhoneContextProvider, usePhoneContext } from './context/phone_context';
import { SnackbarContextProvider } from './context/snackbar_context';

const PhoneCard = ({ phone }) => {
  const {
    id,
    imageFileName,
    manufacturer,
    name,
    price,
  } = phone;
  const navigate = useNavigate();
  const onClickSeeDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <PhoneCardStyled>
      <TextStyled large>
        {name} ({manufacturer})
      </TextStyled>
      <TextStyled medium>
        Price: ${price}
      </TextStyled>
      <SeeDetailButtonStyled onClick={onClickSeeDetails}>
        See details
      </SeeDetailButtonStyled>
      <ImageStyled src={imageFileName} atl={`${name}-image`}/>
    </PhoneCardStyled>
  )
};

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


it('Renders Home screen', () => {
  mount(
    <SnackbarContextProvider>
      <PhoneContextProvider>
        <HomeScreen />
      </PhoneContextProvider>
    </SnackbarContextProvider>
  );
});