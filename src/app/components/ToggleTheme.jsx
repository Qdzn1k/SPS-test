"use client"
// ToggleThemeButton.js
import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from './themes';

const ToggleThemeButton = () => {
  const [colorScheme, setColorScheme] = useState('auto');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColorScheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);

    // Выбор цветовой схемы в зависимости от темы
    const theme = newColorScheme === 'dark' ? darkTheme : lightTheme;
    applyTheme(theme);
  };

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty('--foreground-rgb', theme.foregroundRgb);
    document.documentElement.style.setProperty('--background-start-rgb', theme.backgroundStartRgb);
    document.documentElement.style.setProperty('--background-end-rgb', theme.backgroundEndRgb);
  };

  return (
    <button onClick={toggleTheme}>Переключить тему</button>
  );
};

export default ToggleThemeButton;
