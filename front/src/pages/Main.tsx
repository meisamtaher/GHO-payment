
// import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainBar from '../components/MainBar';
import Spend from './Spend';
// import NFTDetials from './NFTDetails';
// import Profile from './Profile';
// import Mint from './Mint';

function Main() {
  return (
    <BrowserRouter>
      <MainBar />
        <Routes>
            <Route path = "/" element={<Spend/>}  />
            {/* <Route path = "/real-token/Explore/:NFTId/:OrderId" element={<NFTDetials sell={false}/>}  />
            <Route path = "/real-token/Profile/:ProfileId" element={<Profile/>}  />
            <Route path = "/real-token/Profile/:ProfileId/:NFTId" element={<NFTDetials sell={true}/>}  />
            <Route path = "/real-token/Mint" element={<Mint/>}  /> */}
        </Routes>
    </BrowserRouter>

  );
}

export default Main;