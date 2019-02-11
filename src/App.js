import React, { Component } from 'react';
import { ListCategories } from './component'

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <ListCategories />
    );
  }
}

export default App;
