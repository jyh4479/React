import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Test1, Test2, Test3, Test4 } from './pages/index';


class App extends Component {
  render() {
    return (
        <div>
            <Route path="/" component={Home} exact/>
            <Route path="/Test1" component={Test1}/>
            <Route path="/Test2" component={Test2}/>
            <Route path="/Test3" component={Test3}/>
            <Route path="/Test4" component={Test4}/>
        </div>
    );
  }
}

export default App;