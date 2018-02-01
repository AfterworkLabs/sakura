import React, { Component } from 'react';
import styled from 'styled-components';

const View = styled.div`
height 100%;
`;

class Hoho extends Component {
  render() {
    return (
      <View>
        <h1>What does the fox say?</h1>
        <h2>hohohohohoho</h2>
      </View>
    )
  }
}

export default Hoho;