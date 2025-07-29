// components/Icon.js

import React from 'react';
import { Text } from 'react-native';

const Icon = ({ name, size = 24, color = '#000' }) => {
  const icons = {
    camera: '📷',
    users: '👥',
    warehouse: '🏪',
    home: '🏠',
    user: '👤',
    search: '🔍',
    mapPin: '📍',
    star: '⭐',
    calendar: '📅',
    phone: '📞',
    mail: '📧',
    checkCircle: '✅',
    alertCircle: '⚠️',
    leaf: '🌿',
    clock: '🕐',
    menu: '☰',
    settings: '⚙️'
  };

  return (
    <Text style={{ fontSize: size, color }}>
      {icons[name] || '❓'}
    </Text>
  );
};

export default Icon;
