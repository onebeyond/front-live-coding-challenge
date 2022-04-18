import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../containers/home_screen';
import { DetailScreen } from 'ui/containers/detail_screen';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/details">
          <Route path=":id" element={<DetailScreen />} />
        </Route>
      </Routes>
    </Router>
  )
}

export { AppNavigation };
