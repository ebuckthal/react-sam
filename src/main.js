import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Dualscape from 'containers/projects/Dualscape';
import SeventeenthStreet from 'containers/projects/SeventeenthStreet';
import CollectiveAuthorship from 'containers/projects/CollectiveAuthorship';
import Store from './store';

ReactDOM.render(
   <Provider store={ Store() }>
      <Router history={ browserHistory } >
         <Route path="/" component={ App }>
            <Route path="/dualscape" component={ Dualscape } />
            <Route path="/17th-street" component={ SeventeenthStreet } />
            <Route path="/collective-authorship" component={ CollectiveAuthorship } />
         </Route>
      </Router>
   </Provider>,
   document.getElementById('root')
);

var i = 0;
var bg_colors = ['magenta', 'yellow', 'cyan'];
var bg_interval = window.setInterval(function() { 
      i = (++i % bg_colors.length);
      document.body.style.backgroundColor = bg_colors[i];
}, 250);
