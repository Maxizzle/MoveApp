import React from 'react';
import Home from "./Home/Home"
import { Switch, Route } from "react-router-dom"
import './App.css';
import Quote from './Quote/Quote';
import Gender from "./Gender/Gender"
import Axios from "axios"
import Info from "./Info/Info"
import Nutrients from './components/Nutrition/Nutrients';
import Men from './Container/Men';
import Women from './Container/Women'

function App() {
  return (

    <div className="App">
    

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/Gender" component={Gender} />
        <Route exact path="/Quote" component={Quote} />
        <Route exact path="/Info" component={Info} />
        <Route exact path="/Nutrients" component={Nutrients} />
        <Route exact path="/Men" component={Men} />
        <Route exact path="/Women" component={Women} />
        <Route exact path="/Nutrients" component={Nutrients} />




      </Switch>
    </div>
  );
}

export default App;
