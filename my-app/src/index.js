import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import PageNotFound from './components/PageNotFound';
import './index.css';


import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom'


const Root = () => {
  return(
    <Router history={browserHistory}>
      <div>
        <Route exactly path="/" component={App} />
        <Route path="/home" component={App} />
      {/* need to handle page not found */}
      </div>
    </Router>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
