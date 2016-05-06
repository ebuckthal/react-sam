import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Dualscape from 'containers/Dualscape';
import Store from './store';

ReactDOM.render(
   <Provider store={ Store() }>
      <Router history={ hashHistory } >
         <Route path="/" component={ App }>
            <Route path="/dualscape" component={ Dualscape } />
         </Route>
      </Router>
   </Provider>,
   document.getElementById('root')
);
