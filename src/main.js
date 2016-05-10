import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Dualscape from 'containers/projects/Dualscape';
import SeventeenthStreet from 'containers/projects/SeventeenthStreet';
import CollectiveAuthorship from 'containers/projects/CollectiveAuthorship';
import Store from './store';

ReactDOM.render(
   <Provider store={ Store() }>
      <Router history={ hashHistory } >
         <Route path="/" component={ App }>
            <Route path="/dualscape" component={ Dualscape } />
            <Route path="/17th-street" component={ SeventeenthStreet } />
            <Route path="/collective-authorship" component={ CollectiveAuthorship } />
         </Route>
      </Router>
   </Provider>,
   document.getElementById('root')
);
