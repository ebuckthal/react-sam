import './button.scss';
import React from 'react';

export default ({ text, active, onClick }) => {
   return <a 
      href='#' 
      onClick={ onClick } 
      className={'filter-button ' + (active ? 'active' : '')}>
      { text }
   </a>
};
