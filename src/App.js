import React, { Component } from 'react';
import Container from './components/Container';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo'
import info from './info.json';


class App extends Component {

  state = { 
    info,
    currentScore: 0,
    highSchore: 0
   };

  render() {

    return (

      <div>

        <Navbar current={this.state.currentScore} high={this.state.highSchore} />

        <Jumbo />

        <Container>

          <div className="row">

            {this.state.info.map((character) =>

              <Image image={character.image} key={character.id} />

            )}

          </div>

        </Container>

      </div>

    )
  }
}

export default App;
