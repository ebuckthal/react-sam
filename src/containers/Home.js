import React from 'react';
import FilterBarContainer from 'containers/Filter.container';
import ProjectGridContainer from 'containers/ProjectGrid.container';

export default () => (
   <div className="page home">
      <FilterBarContainer />
      <ProjectGridContainer />
   </div>
);
