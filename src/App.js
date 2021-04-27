import React, { Component } from 'react'
import AnimatedNavbar from './AnimatedNavbar'
import styled from 'styled-components'


const AppContainer = styled.div`
background: #53f;
display: flex;
flex-direction: column;
min-height: 100vh;

> div:first-of-type {
  flex: 1 0 70vh;
}
`;

class App extends Component {
render() {
  return (
    <AppContainer>
      <AnimatedNavbar />
    </AppContainer>
  );
}
}

export default App