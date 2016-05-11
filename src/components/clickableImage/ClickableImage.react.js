import './clickable-image.scss'
import React from 'react';


export default ({ src, caption }) => (
   <div className="clickable-image">
      <img src={ src } />
      <span className="caption">{ caption }</span>
   </div>
);

