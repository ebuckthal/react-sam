import 'styles/main';
import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
//import Nav from 'containers/Nav.container';
import { IndexLink, Link } from 'react-router';
import ProjectLink from 'components/projectLink/ProjectLink.react';
import ImageOverlay from 'components/imageOverlay/ImageOverlay.react';

import { getTitleWithTags } from 'reducers/Projects.reducer';
import { getVisibleProjects } from 'reducers/Projects.reducer';
import { removeImageOverlay } from 'actions';

class App extends React.Component {
   render() {

      let imageOverlay;

      if( this.props.image.src ) {
         imageOverlay = <ImageOverlay 
         src={ this.props.image.src } 
         onClick={ this.props.onImageOverlayClick }/>;
      }

      return (
         <div className="app">
         { imageOverlay }
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

const mapStateToProps = ({ projects, filters, image }) => {

   let visibleProjects = getVisibleProjects(projects, filters);

   visibleProjects = visibleProjects.map((project) => {
         let newTitle = getTitleWithTags(project.title, project.tags);
         return {...project, title: newTitle};
   });

   return {
      filters: filters,
      projects: visibleProjects,
      image: image
   };
}

const mapDispatchToProps = (dispatch) => {

   return {
      onImageOverlayClick: () => { 
         dispatch(removeImageOverlay()) 
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
