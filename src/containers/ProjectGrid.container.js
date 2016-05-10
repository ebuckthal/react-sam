import React from 'react';
import { connect } from 'react-redux';
import ProjectGrid from 'components/projectGrid/ProjectGrid.react';

import { getVisibleProjects } from 'reducers/Projects.reducer';

const mapStateToProps = ({ projects, filters }) => {
   return { projects: getVisibleProjects(projects, filters) };
}

const ProjectGridContainer = (props) => (
   <ProjectGrid {...props} />
);

export default connect(mapStateToProps)(ProjectGridContainer);
