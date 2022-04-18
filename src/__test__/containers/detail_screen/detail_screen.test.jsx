import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DetailScreen } from '../../../ui/containers/detail_screen';
import { PhoneContextProvider } from '../../../ui/store/context/phone_context';
import { SnackbarContextProvider } from '../../../ui/store/context/snackbar_context';

test('DetailScreen render', () => {
  const detailScreen = render(
    <SnackbarContextProvider>
      <PhoneContextProvider>
        <DetailScreen />
      </PhoneContextProvider>
    </SnackbarContextProvider>
  );
  expect(detailScreen).toMatchSnapshot();
})