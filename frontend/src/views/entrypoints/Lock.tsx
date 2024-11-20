import React from 'react';
import { Clock } from '../components/Clock';
import { useNavigate } from 'react-router-dom';

import { CSSProperties } from 'react';
import { useTouchHandlers } from '../../hooks/useTouchHandlers';

const containerStyle: CSSProperties = {
  backgroundImage: 'url("/wallpaper1.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const Lock: React.FC = () => {
  const navigate = useNavigate();
  const { handleTouchStart, handleTouchEnd } = useTouchHandlers(navigate, '/home');

  return (
    <div style={containerStyle} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Clock fontFamily="Russo One, sans-serif" color="white" />
    </div>
  );
};
