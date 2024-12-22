import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './forms/front/FrontPage.tsx';
import FirstLinkPage from './forms/firstlink/FirstLinkPage.tsx';
import SecondLinkPage from './forms/secondlink/SecondLinkPage.tsx';
import ThirdLinkPage from './forms/thirdlink/ThirdLinkPage.tsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/front.html" element={<FrontPage/>} />
          <Route path="/firstlink.html" element={<FirstLinkPage/>} />
          <Route path="/secondlink.html" element={<SecondLinkPage/>} />
          <Route path="/thirdlink.html" element={<ThirdLinkPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
