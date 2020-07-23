import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem"
import ItemList from "./components/ItemList"

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Switch>
            <Route exact path={["/", "/items"]} component={ItemList} />
            <Route exact path="/add" component={AddItem} />
            <Route exact path="/edit" component={EditItem} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
