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
      <ContentStyled data-cy={'detail-screen-content'}>
        <DefaultButton onClick={onPressBack} dataCy={'detail-screen-content-back-button'}>
          Back
        </DefaultButton>
        <TextStyled large marginTop data-cy={'detail-screen-content-name'}>
          {name} ({manufacturer})
        </TextStyled>
        <TextStyled data-cy={'detail-screen-content-description'}>
          {description}
        </TextStyled>
        <TextStyled data-cy={'detail-screen-content-price'}>
          Price: ${price}
        </TextStyled>
        <TextStyled data-cy={'detail-screen-content-proccessor'}>
          Processor: {processor}
        </TextStyled>
        <TextStyled data-cy={'detail-screen-content-ram'}>
          Ram: {ram}
        </TextStyled>
        <TextStyled data-cy={'detail-screen-content-screen'}>
          Screen: {screen}
        </TextStyled>
        <TextStyled data-cy={'detail-screen-content-color'}>
          Color: {color}
        </TextStyled>
        <ImageStyled src={imageFileName} data-cy={'detail-screen-content-image'}/>
      </ContentStyled>
    )
  }

  return (
    <DetailScreenStyled hasData={selectedPhone} data-cy={'detail-screen'}>
      {renderContent()}
    </DetailScreenStyled>
  )
});

export { DetailScreen };