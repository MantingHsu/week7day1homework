import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const backgroundColor = theme('mode', {
  light: '#ffffff',
  dark: '#1c1c1c'
});

const textColor = theme('mode', {
  light: '#000000',
  dark: '#ffffff'
});

export const Page = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function DarkThemeProvider({ children }) {
  const darkTheme = useSelector(state => state.darkTheme);
  return (
    <ThemeProvider theme={{ mode: darkTheme ? 'dark' : 'light' }}>
      {children}
    </ThemeProvider>
  );
}
