import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import info from './info.json';


class App extends Component {

  state = { info };

  render() {

    return (

      <Wrapper>

        {this.state.info.map((character) =>

          <img src={character.image} />
        )}

      </Wrapper>

    )
  }
}

export default App;
