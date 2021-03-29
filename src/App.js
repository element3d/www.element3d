import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import './App.css';
import { Home } from './Components/Home'
import { Docs } from './Components/Docs/Docs'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/docs">
            <Docs>
            </Docs>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
