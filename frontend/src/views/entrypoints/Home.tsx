import { Button, Space, Swiper } from 'antd-mobile';
import React, { CSSProperties } from 'react';
import { Dock } from '../components/Dock';
import {
  AntOutline,
  CalendarOutline,
  CameraOutline,
  ClockCircleOutline,
  SetOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
import { useTouchHandlers } from '../../hooks/useTouchHandlers';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { handleTouchStart, handleTouchEnd } = useTouchHandlers(navigate, '/lock');

  const containerStyle: CSSProperties = {
    backgroundImage: 'url("/wallpaper1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const dummyApps = [
    [
      { name: 'カレンダー', icon: <CalendarOutline />, redirectPath: '/home' },
      { name: 'カメラ', icon: <CameraOutline />, redirectPath: '/home' },
      { name: 'アラーム', icon: <ClockCircleOutline />, redirectPath: '/home' },
      { name: '設定', icon: <SetOutline />, redirectPath: '/home' },
    ],
    [{ name: 'ユーザー', icon: <UserOutline />, redirectPath: '/home' }],
  ];

  const items = dummyApps.map((page, pageIndex) => (
    <Swiper.Item key={pageIndex}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '4px',
          height: '100%',
        }}
      >
        {page.map((app, appIndex) => (
          <Space direction="vertical" key={appIndex} style={{ textAlign: 'center' }}>
            <Button style={{ margin: '10px' }} onClick={() => navigate(app.redirectPath)}>
              {app.icon}
            </Button>
            <span style={{ color: 'white' }}>{app.name}</span>
          </Space>
        ))}
      </div>
    </Swiper.Item>
  ));

  const dockApps = [
    {
      name: 'Antdm',
      icon: <AntOutline color="#76c6b8" />,
      redirectPath: '/chat',
    },
  ];
  const dockItems = dockApps.map((app, index) => (
    <div key={index}>
      <Button style={{ margin: '10px' }} onClick={() => navigate(app.redirectPath)}>
        {app.icon}
      </Button>
    </div>
  ));

  return (
    <div style={containerStyle} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div style={{ flex: 8.5, margin: '24px' }}>
        <Swiper style={{ height: '100%' }}>{items}</Swiper>
      </div>
      <div style={{ flex: 1.5, margin: '24px' }}>
        <Dock items={dockItems} />
      </div>
    </div>
  );
};
