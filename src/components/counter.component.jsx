import React, { Component } from "react";

class Counter extends Component {
  state = {
      items: [0, 2]
  };

  formatCount = () => {
      if(this.state.items[0] == 0) return 'zero';
      return this.state.items[0];
  }

  handleIncrement = () => {
    //   const { items } = this.state; // Array distructuring
      
      const arra = [...this.state.items];
      arra[0]++;

      this.setState({items: arra});
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>

        <button type="button" class="btn btn-primary m-4">
          Reset
        </button>

        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button onClick={this.handleIncrement} type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>

          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>

          <li class="list-unstyled">
            <div>
              <span class="badge bg-secondary">{this.formatCount()}</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
