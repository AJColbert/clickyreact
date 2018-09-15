import React, { Component } from 'react';
import Card from "./components/Card";
import Nav from "./components/Nav"
import logo from './logo.svg';
import character from "./characters.json";
import './App.css';

class App extends Component
{
  state = {
    characters: shuffleArray(character.slice()),
    score: 0,
    topScore: 0,
    clicked: [],
    message: "Click An Image To Begin"
  };


  handleClick = id =>
  {
    console.log("HAALLYA")
    const { clicked } = this.state;
    var list = this.state.clicked;
    var reset = list.includes(id);
  console.log(list)
      console.log(reset)
    if (reset)
    {
      this.setState({ clicked: [], characters: shuffleArray(character.slice()), message: "You Guessed Incorrectly!" });
      this.UpdateScore();
    }
    else
    {
      clicked.push(id);
      this.setState({ score: this.state.score + 1, characters: shuffleArray(character.slice()), message: "You Guessed Correctly!" });

    }

  }



  UpdateScore = () =>
  {
    if (this.state.score > this.state.topScore)
    {
      this.setState({ topScore: this.state.score, score: 0, });
    }
  }


  render()
  {
    let content = []

    {
      this.state.characters.map(character => (
       content.push(<Card
          id={character.id}
          key={character.id}
          image={character.image}
          onClick={this.handleClick}
        />)
      ))
    }

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <div className="Flex-Container">
        {content}
        </div>
      </div>
    );
  }

}

function shuffleArray(array)
{
  for (let i = array.length - 1; i > 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export default App;
