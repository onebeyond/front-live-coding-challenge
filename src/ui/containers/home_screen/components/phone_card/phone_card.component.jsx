import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { PhoneCardStyled, TextStyled, SeeDetailButtonStyled, ImageStyled } from './phone_card.styled';

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
    <PhoneCardStyled data-cy={'phone-card'}>
      <TextStyled large data-cy={'phone-card-name'}>
        {name} ({manufacturer})</TextStyled>
      <TextStyled medium data-cy={'phone-card-price'}>
        Price: ${price}
      </TextStyled>
      <SeeDetailButtonStyled onClick={onClickSeeDetails} data-cy={'phone-card-see-detail-button'}>
        See details
      </SeeDetailButtonStyled>
      <ImageStyled src={imageFileName} atl={`${name}-image`}data-cy={'phone-card-image'} />
    </PhoneCardStyled>
  )
};

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageFileName: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    processor: PropTypes.string.isRequired,
    ram: PropTypes.number.isRequired,
    screen: PropTypes.string.isRequired,
  })
};

export { PhoneCard };
