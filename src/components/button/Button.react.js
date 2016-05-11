import './button.scss';
import React from 'react';

export default ({ text, active, onClick }) => {
   return (
      <a href="#"
      className="filter-button"
      onClick={ onClick }>
      <span className={ active ? "icon-check-square-o" : "icon-square-o" }></span>
            { text }
         </a>
      );
};
