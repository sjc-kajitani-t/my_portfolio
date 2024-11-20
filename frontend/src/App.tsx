import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './views/entrypoints/Home';
import { Chat } from './views/entrypoints/Chat';
import { Lock } from './views/entrypoints/Lock';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', width: '100vw' }}>
      <BrowserRouter>
        <Routes>
          <Route path="lock" element={<Lock />} />
          <Route path="home" element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/lock" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
