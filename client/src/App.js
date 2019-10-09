import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Nav />
    //   <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/" component={Books} />
    //       <Route exact path="/books" component={Books} />
    //       <Route exact path="/books/:id" component={Detail} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </div>
    // </Router>
    );
  }
}

export default App;
