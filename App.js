import React from 'react';
import Navigation from './navigation';
import {Block} from './components';


class App extends React.Component {

  render() {
    return (
      <Block>
          <Navigation/>
      </Block>
    )
  }
}


export default App;