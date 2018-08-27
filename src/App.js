import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = [...counter];
    // counters[index].value--;
    // this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    //console.log("delete!", counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleRAdd = () => {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
