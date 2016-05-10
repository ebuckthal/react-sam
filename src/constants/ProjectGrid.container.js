import React from 'react';
import { connect } from 'react-redux';
import ProjectGrid from 'components/projectGrid/ProjectGrid.react';

const mapStateToProps ({ projects }) => ({ projects });

const ProjectGridContainer = (props) => (
   <ProjectGrid {...props} />
);

export default connect(mapStateToProps)(ProjectGridContainer);
