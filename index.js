import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import { Router, Route, Link, useParams } from 'react-router-dom';
import history from './history';
import NewSnip from './NewSnip';
import EditSnip from './EditSnip';

const BasicExample = () => (
  <Router history={history}>
    <div>
      <Demo history={history} />

      <hr />

      <Route path="/New" component={NewSnip} />
      <Route path="/Snips" component={() => "About"} />
      <Route path="/Edit/:id" component={() => <EditSnip />} />
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById('root'));
