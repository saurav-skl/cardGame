// import './App.css';
import React, { Component } from "react";
import Card from "./Card";
import { robots } from "./Robot";
import Search from "./Search";
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading!!</h1>
    ) : (
      <div>
        <h1 className="Code georgia tc f2"> Card Game </h1>
        <Search searchChange={this.onSearchChange} />
        <Scroll>
          <Card robots={filteredRobots} />
        </Scroll>
        {/* {console.log(filteredRobots)} */}
      </div>
    );
  }
}

export default App;
