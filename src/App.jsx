import React, { useState } from 'react';
import Timer from './components/Timer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

function App() {


  return (
    <AppContainer>
      <Header>Pomodoro Timer</Header>
      <Timer />
    </AppContainer>
  );
}

export default App;
