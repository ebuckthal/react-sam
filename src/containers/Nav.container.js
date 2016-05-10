import React from 'react';
import { connect } from 'react-redux';

import Nav from 'components/nav/Nav.react';

import { getTitleWithTags } from 'reducers/Projects.reducer';

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

export default connect(mapStateToProps)(Nav);
