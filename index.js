import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import { Router, Route, Link } from 'react-router-dom';
import history from './history';
import NewSnip from './NewSnip';

const BasicExample = () => (
  <Router history={history}>
    <div>
      <Demo history={history} />

      <hr />

      <Route path="/New" component={NewSnip} />
      <Route path="/Snips" component={() => "About"} />
      <Route path="/Frame" component={() => "Topics"} />
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById('root'));
