import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import BeerCard from "./BeerCard";
// import ListBeers from "./ListBeers";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      arrayOfBeer: [],
      active: {}
      // searchTerm: ""
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer: arrayOfBeer.map((beer, index) => ({
        ...beer, 
        id: index
      })) });
    });
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = (beer) => {
    this.setState({
      ...this.state,
      isClicked: !this.state.isClicked,
      active: beer
    })
    
  }

  // filterSearch(term) {
  //   return (item) => {
  //     return (
  //       item.name.toLowerCase().includes(term.toLowerCase())
  //     )
  //   }


  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <form>
            <input
            name="searchTerm"
            type="text"
            value={this.state.searchTerm} 
            onChange={(e) => {this.handleChange(e)}}
            placeholder="search by term">
            </input>
          </form>
          {
            this.state.searchTerm ? 
            <ListBeers
            beer={this.state.arrayOfBeer.filter(this.filterSearch(this.state.searchTerm))}
            /> :
              <ListBeers beer={this.state.arrayOfBeer} />
          } */}
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
                  handleClick={() => this.handleClick(beer)}
                  isClicked={this.state.isClicked}
                  id={beer.id}
                  active={this.state.active}
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
