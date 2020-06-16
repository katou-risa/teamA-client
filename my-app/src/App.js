import React, { Component } from 'react';

import Piechart from "./Piechart"
import Header from "./Header"
import Insert from "./Insert"
import Table from './Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <Piechart />
        <Insert />
        <Table data={this.props.data} />
      </div>
    );
  }
}


export default App;