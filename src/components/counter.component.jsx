import React, { Component } from 'react';

class Counter extends Component {
  state = {
    items: [0, 5]
  };

  formatCount = () => {
    if (this.state.items[0] == 0) return 'zero';
    return this.state.items[0];
  };

  handleIncrement = () => {
    const arra = [...this.state.items];
    arra[0]++;

    this.setState({ items: arra });
  };

  handleDecrement = () => {
    const arra2 = [...this.state.items];

    if (arra2[0] > 0) {
      arra2[0]--;
    }

    this.setState({ items: arra2 });
  };


  render() {
    return (
      <>
        {/* Navbar start */}
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>
        {/* Navbar end */}

        {/* Reset button start */}
        <button type="button" class="btn btn-primary m-4">
          Reset
        </button>
        {/* Reset button end */}

        <ul>
          {/* First button start  */}
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button
                onClick={this.handleIncrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={this.handleDecrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
          {/* First button end */}

          {/*  Second button
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
          </li> */}


          {/* Third button 
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
          </li> */}
        </ul>
      </>
    );
  }
}

export default Counter;
