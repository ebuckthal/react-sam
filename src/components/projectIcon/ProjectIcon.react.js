import './projectIcon.scss';
import React from 'react';
import { Link } from 'react-router';


export default ({ title, icon, url, visible }) => {

   return (

      <Link to={ url } title={ title }>
         <div className={ "project-icon " + ( !visible ? 'hidden' : '') }>
         <img src={ icon } />
         { title }
         </div>
      </Link>
   );

};
