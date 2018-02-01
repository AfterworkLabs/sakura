import React, { Component } from 'react';
import styled from 'styled-components';

const View = styled.div`
height 100%;
`;

class Randomizer extends Component {
  render() {
    return (
      <View>
        <h1>This is the homepage for our app "Randomizer"</h1>
        <h2>To be updated soon</h2>
      </View>
    )
  }
}

export default Randomizer;