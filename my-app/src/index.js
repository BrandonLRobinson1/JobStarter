import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import PageNotFound from './components/PageNotFound';
import './index.css';

import {
  BrowserRouter as Router,
  Route
  // browserHistory //history={browserHistory}
} from 'react-router-dom'

const Root = () => {
  return(
    <Router>
      <div>
        <Route exactly path="/" component={App} />
         {/*<Route exacty path="/jobstarter/:name" component={PageNotFound} />*/}
        {/*<Royte path="/HomePage/:user" component={App}*/}
      {/* need to handle page not found */}
        <Route path="/:" component={PageNotFound} />
      </div>
    </Router>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
