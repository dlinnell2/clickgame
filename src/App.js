import React, { Component } from 'react';
import Container from './components/Container';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo'
import info from './info.json';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


class App extends Component {

  state = {
    info,
    currentScore: 0,
    highScore: 0,
    clicked: [0],
    message: null,
    messageStyle: null,
  };

  clickImage = (id) => {

    let checkClick = this.state.clicked.some((element) => element === id);
    let info = shuffle(this.state.info)

    if (checkClick) {

      this.setState({
        currentScore: 0,
        clicked: [0],
        message: "Incorrect!",
        messageStyle: "wrong",
        info
      })

    } else {

      this.state.clicked.push(id);

      let current = this.state.currentScore;

      if (this.state.currentScore >= this.state.highScore) {
        console.log('update high score')
        this.setState({
          highScore: this.state.currentScore + 1,
          currentScore: this.state.currentScore + 1,
          message: "Correct!",
          messageStyle: "correct",
          info
        })
      } else {
        this.setState({
          currentScore: this.state.currentScore + 1,
          message: "Correct!",
          messageStyle: "correct",
          info
        })
      }

    }
  }

  render() {

    return (

      <div>

        <Navbar current={this.state.currentScore}
        high={this.state.highScore}
        message={this.state.message}
        style={this.state.messageStyle}/>

        <Jumbo />

        <Container>

          <div className="row">

            {this.state.info.map((character) =>

              <Image
                image={character.image}
                id={character.id}
                clickImage={this.clickImage} />

            )}

          </div>

        </Container>

      </div>

    )
  }
}

export default App;
