import './button.scss';
import React from 'react';

export default ({ text, active, onClick }) => {
   return (<label>
      <input
      className={'filter-button ' + (active ? 'active' : '')}
      type="checkbox"
      checked={ active }
      readOnly={true}
      onClick={ onClick } />

      { text }

   </label>);
};
