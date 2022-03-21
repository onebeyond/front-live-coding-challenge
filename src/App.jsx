
import './App.css';

import { Provider } from 'react-redux';

import generateStore from './ui/store/redux/store';

import { AppNavigation } from './ui/navigation';

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store} >
      <AppNavigation />
    </Provider>
  );
}

export default App;
