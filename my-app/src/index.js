import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import PageNotFound from './components/PageNotFound';

import './index.css';

import {
  BrowserRouter as Router, /// AS ROUTER
  Route
  // Switch
  // browserHistory //history={browserHistory}
} from 'react-router-dom';

const Root = () => {
  return(
    <Router>
      <div>
          <Route path="/" component={App} />
          {/*<Route exacty path="/jobstarter/:name" component={PageNotFound} />*/}
          {/*<Royte path="/HomePage/:user" component={App}*/}
          {/* need to handle page not found */} 
      </div>
    </Router>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);