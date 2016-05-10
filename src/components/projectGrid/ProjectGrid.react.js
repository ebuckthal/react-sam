import React from 'react';
import ProjectIcon from 'components/projectIcon/ProjectIcon.react';

export default ({ projects }) => {
   return (
      <div className="project-grid">
      {
         projects.map((project, index) => (
               <ProjectIcon key={ index } { ...project } />
         ))
      }
      </div>
   );
}; 
