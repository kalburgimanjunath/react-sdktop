import React from 'react';
import './style.css';

import { Routes, Route } from 'react-router-dom';
import { Login, Signup, Dashboard } from './pages/index';
import { getStorage } from './firebase';
export default function App() {
  // getStorage();
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dasbhoard" element={<Dashboard />}></Route>
        <Route path="/*" element={<Signup />} exact></Route>
      </Routes>
    </div>
  );
}
