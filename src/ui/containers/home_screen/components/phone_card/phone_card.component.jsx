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
