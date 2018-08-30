import React, { Component } from "react";

class Counter extends Component {
  // handleDecrease = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  // renderTages() {
  //   if (this.state.tags.length === 0) return <p>No tages!</p>;

  //   return null;
  //   // <ul>
  //   //   {this.state.tags.map(tag => (
  //   //     <li key={tag}>{tag}</li>
  //   //   ))}
  //   // </ul>
  // }

  componentWillUnmount() {
    console.log("about to remove element!");
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTages()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
