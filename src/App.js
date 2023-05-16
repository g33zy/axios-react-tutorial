import React, { Component } from "react";
import axios from "axios";
// import logo from './logo.svg';
import "./App.css";

import BeerCard from "./BeerCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      arrayOfBeer: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      isClicked: !this.state.isClicked,
    })
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard
                  key={index}
                  name={beer.name}
                  image_url={beer.image_url}
                  abv={beer.abv}
                  first_brewed={beer.first_brewed}
                  tagline={beer.tagline}
                  description={beer.description}
                  handleClick={this.handleClick}
                  isClicked={this.state.isClicked}
                />
              );
            })}
          </ol>
          
        </header>
      </div>
    );
  }
}

export default App;
