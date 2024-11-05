import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicketList from './components/TicketList.component';
import TicketForm from './components/TicketForm.component';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TicketList} />
        <Route path="/create" component={TicketForm} />
      </Switch>
    </Router>
  );
};

export default App;
