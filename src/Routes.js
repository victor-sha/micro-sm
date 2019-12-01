import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import { Home } from "./Home";
import { ServiceComponent } from "./ServiceComponent";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const linkStyle = {color: "black"};

export default function BasicExample() {
  return (
    <Router>
      <Navbar bg="primary" variant="light" >
        <Navbar.Brand href="/">
            MICROService PRO
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item variant="dark">
            <NavLink style={linkStyle} color="black" to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink style={linkStyle} to="/about">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink style={linkStyle} to="/dashboard">Dashboard</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/service/:id">
            <ServiceComponent />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <Home/>
//   );
// }


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
