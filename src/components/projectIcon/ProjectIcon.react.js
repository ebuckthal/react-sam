import './projectIcon.scss';
import React from 'react';
import { Link } from 'react-router';


export default ({ title, icon, url }) => {

   return (

      <Link to={ url } title={ title }>
         <div className="project-icon">
         <img src={ icon } />
         { title }
         </div>
      </Link>
   );

};
