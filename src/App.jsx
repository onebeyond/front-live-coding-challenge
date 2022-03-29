import React from 'react';

import './App.css';

import { AppNavigation } from 'ui/navigation';
import { ContextController } from 'ui/store/context/context_controller';

const App = () => {
  return (
    <ContextController>
      <AppNavigation />
    </ContextController>
  );
}

export default App;
