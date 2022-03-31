import React, { memo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DetailScreenStyled, ContentStyled, TextStyled, ImageStyled } from './detail_screen.styled';

import { Loader } from 'ui/components/loader';
import { DefaultButton } from 'ui/components/buttons/default_button';
import { usePhoneContext } from 'ui/store/context/phone_context';

const DetailScreen = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedPhone, fetchPhoneById } = usePhoneContext();

  useEffect(() => {
    if (id) {
      fetchPhoneById(id);
    }
  }, [id]);

  const onPressBack = () => {
    navigate(-1)
  };
  
  const renderContent = () => {
    if (!selectedPhone) {
      return <Loader />;
    }

    const {
      color,
      description,
      imageFileName,
      manufacturer,
      name,
      price,
      processor,
      ram,
      screen,
    } = selectedPhone;
    return (
      <ContentStyled>
        <DefaultButton onClick={onPressBack}>
          Back
        </DefaultButton>
        <TextStyled large marginTop>
          {name} ({manufacturer})
        </TextStyled>
        <TextStyled>
          {description}
        </TextStyled>
        <TextStyled>
          Price: ${price}
        </TextStyled>
        <TextStyled>
          Processor: {processor}
        </TextStyled>
        <TextStyled>
          Ram: {ram}
        </TextStyled>
        <TextStyled>
          Screen: {screen}
        </TextStyled>
        <TextStyled>
          Color: {color}
        </TextStyled>
        <ImageStyled src={imageFileName} />
      </ContentStyled>
    )
  }

  return (
    <DetailScreenStyled hasData={selectedPhone}>
      {renderContent()}
    </DetailScreenStyled>
  )
});

export { DetailScreen };