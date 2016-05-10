import './button.scss';
import React from 'react';

export default ({ text, active, onClick }) => {
   return (
         <label
         className={'filter-button ' + (active ? 'active' : '')}>

         <input
         type="checkbox"
         checked={ active }
         readOnly={true}
         onClick={ onClick } />

         { text }

         </label>
      );
};
