import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import PageNotFound from './components/PageNotFound';
import './index.css';

//new
import {
  BrowserRouter as Router,
  Route,
  //Link,
  //NavLink,
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

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );


// original

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
