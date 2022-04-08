import React from 'react';
import { render } from '@testing-library/react';

import { HomeScreen } from '../../../ui/containers/home_screen';
import { PhoneContextProvider } from '../../../ui/store/context/phone_context';
import { SnackbarContextProvider } from '../../../ui/store/context/snackbar_context';

test('HomeScreen render', () => {
  const homeScreen = render(
    <SnackbarContextProvider>
      <PhoneContextProvider>
        <HomeScreen />
      </PhoneContextProvider>
    </SnackbarContextProvider>
  );
  expect(homeScreen).toMatchSnapshot();
})