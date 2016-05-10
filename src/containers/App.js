import 'styles/main';
import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
//import Nav from 'containers/Nav.container';
import { IndexLink, Link } from 'react-router';
import ProjectLink from 'components/projectLink/ProjectLink.react';
import { getTitleWithTags } from 'reducers/Projects.reducer';

class App extends React.Component {
   render() {
      return (
         <div className="app">
      <ul className="nav">
      <li className="home">
         <IndexLink activeClassName="active" to="/">Samuel Clovis</IndexLink>
      </li> 
      { this.props.projects.map((project, index) => (
               <li key={ index }><ProjectLink
                  to={ project.url }>
                  { project.title }
               </ProjectLink></li>
      ))}
      </ul>
            {this.props.children || <Home />}
         </div>
      );
   }
};

const mapStateToProps = ({ projects, filters }) => {

   let visibleProjects = projects.map((project) => {
         let newTitle = getTitleWithTags(project.title, project.tags);
         return {...project, title: newTitle};
   });

   return {
      filters: filters,
      projects: visibleProjects
   };
}

export default connect(mapStateToProps)(App);
