import './App.scss';
import React from 'react';
import MyComponent from './Example/MyComponent';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

// 2 component: class component / function component ( function, arrow)


import Nav from './Nav/Nav';

function App() {
  //const App = () => {
  //JSX
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">

          
          <Switch>
          <Route path="/">
            <MyComponent/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
