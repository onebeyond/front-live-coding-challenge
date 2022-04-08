import React from 'react';
import { render } from '@testing-library/react';

import { Snackbar } from '../../../ui/components/snackbar/snackbar.component';
import { SnackbarContextProvider } from '../../../ui/store/context/snackbar_context';

test('Snackbar render', () => {
  const snackBack = render(<Snackbar /> , { wrapper: SnackbarContextProvider });
  expect(snackBack).toMatchSnapshot();
});