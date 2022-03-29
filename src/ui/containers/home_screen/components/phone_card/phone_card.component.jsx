import React from 'react';
import PropTypes from 'prop-types';

import { PhoneCardStyled, TextStyled, ImageStyled } from './phone_card.styled';

const PhoneCard = ({ phone }) => {
  console.log('phone', phone);
  const {
    color,
    description,
    // id,
    imageFileName,
    manufacturer,
    name,
    price,
    processor,
    ram,
    screen,
  } = phone;
  return (
    <PhoneCardStyled>
      <TextStyled large>
        {name} ({manufacturer})
      </TextStyled>
      <TextStyled medium>
        {description}
      </TextStyled>
      <TextStyled medium>
        Processor: {processor}
      </TextStyled>
      <TextStyled medium>
        Ram: {ram}
      </TextStyled>
      <TextStyled medium>
        Screen: {screen}
      </TextStyled>
      <TextStyled medium>
        Color: {color}
      </TextStyled>
      <TextStyled medium>
        Price: {price}
      </TextStyled>
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
