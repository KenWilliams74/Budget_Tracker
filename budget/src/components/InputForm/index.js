import React, { Component } from "react";
import Table from "../Table"
import "./style.css";

class InputForm extends Component {
  // Setting the component's initial state
  state = {
    itemName: [],
    itemAmount: [],
    itemTotal: 0
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      itemName: [...this.state.itemName, event.target.items.value],
      itemAmount: [...this.state.itemAmount, parseFloat(event.target.price.value)],
      itemTotal: this.state.itemTotal + parseFloat(event.target.price.value)
    });
    event.target.items.value = "";
    event.target.price.value = "";
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <>
        <div className="jumbotron text-center alert-success">
          <h1>Budget Tracker</h1>
        </div>
        <div className="container text-center">
          <form className="form" onSubmit={this.handleFormSubmit}>
            <input
              name="items"
              type="text"
              placeholder="Item Name"
            />
            <input
              name="price"
              type="text"
              placeholder="Item Amount"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="container text-right">
          <h6>Total Expenses: ${this.state.itemTotal.toFixed(2)}</h6>
        </div>
        <div className="container alert-dark">
          {this.state.itemName.length > 0 &&
            <Table itemName={this.state.itemName} itemAmount={this.state.itemAmount} />
          }
        </div>

      </>
    );
  }
}

export default InputForm;
