import 'styles/main';
import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div className="app">
            <Link to="/">Samuel Clovis</Link>
            <ul className="nav">
               <li><Link to="/dualscape">dualscape</Link></li>
            </ul>

            {this.props.children}
         </div>
      );
   }
};

export default App;
