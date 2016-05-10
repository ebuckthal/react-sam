import './nav.scss';
import React from 'react';

import { IndexLink, Link } from 'react-router';
import ProjectLink from 'components/projectLink/ProjectLink.react';

export default ({ projects }) => {
   return (
      <ul className="nav">
      <li className="home">
         <IndexLink activeClassName="active" to="/">Samuel Clovis</IndexLink>
      </li> 
      { projects.map((project, index) => (
               <li key={ index }><ProjectLink
                  to={ project.url }>
                  { project.title }
               </ProjectLink></li>
      ))}
      </ul>
   );
};
