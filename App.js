import React from 'react';
import Navigation from './navigation';
import { Block } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <Block>
        <Navigation />
      </Block>
      </Provider>
    )
  }
}

export default App;