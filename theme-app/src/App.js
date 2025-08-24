import React from 'react';
import styled from 'styled-components';
import DarkThemeProvider, { Page } from './DarkThemeProvider';
import DarkThemeToggle from './DarkThemeToggle';

const Title = styled.h1`
  font-size: 2rem;
`;

function App() {
  return (
    <DarkThemeProvider>
      <Page>
        <Title>Theme Switcher App</Title>
        <DarkThemeToggle />
      </Page>
    </DarkThemeProvider>
  );
}

export default App;
