import './filter-bar.scss';
import React from 'react';
import Button from 'components/button/Button.react';

export default ({ filters, onFilterButtonClick }) => {
   return <p className="filter-bar">
   { filters.map((filter, index) => {
            return (
               <Button key={ index } 
               onClick = { () => { onFilterButtonClick(filter.filter) } }
               text={ filter.filter } 
               active={ filter.visible } />
            );
      })
   }
   </p>;
};
