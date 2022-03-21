import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../containers/home_screen';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export { AppNavigation };
