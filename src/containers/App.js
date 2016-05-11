import 'styles/main';
import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
//import Nav from 'containers/Nav.container';
import { IndexLink, Link } from 'react-router';
import ProjectLink from 'components/projectLink/ProjectLink.react';

import { getTitleWithTags } from 'reducers/Projects.reducer';
import { getVisibleProjects } from 'reducers/Projects.reducer';

class App extends React.Component {
   render() {
      return (
         <div className="app">
         <ul className="nav">
         <li className="home">
            <IndexLink activeClassName="active" to="/">samuel-clovis.home</IndexLink>
         </li>
      { this.props.projects.map(({ title, url, visible }, index) => (
               <li key={ index }
                  className={ ( !visible ? 'hidden' : '') }>
                  <ProjectLink
                     to={ url }>
                     { title }
                     </ProjectLink>
                  </li>
      ))}
      </ul>
            {this.props.children || <Home />}
         </div>
      );
   }
};

const mapStateToProps = ({ projects, filters }) => {

   let visibleProjects = getVisibleProjects(projects, filters);

   visibleProjects = visibleProjects.map((project) => {
         let newTitle = getTitleWithTags(project.title, project.tags);
         return {...project, title: newTitle};
   });

   return {
      filters: filters,
      projects: visibleProjects
   };
}

export default connect(mapStateToProps)(App);
