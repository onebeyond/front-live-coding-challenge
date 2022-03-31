import React from 'react';

import './App.css';

import { AppNavigation } from 'ui/navigation';
import { ContextController } from 'ui/store/context_controller';
import { Snackbar } from 'ui/components/snackbar';

const App = () => {
  return (
    <ContextController>
      <Snackbar />
      <AppNavigation />
    </ContextController>
  );
}

export default App;
