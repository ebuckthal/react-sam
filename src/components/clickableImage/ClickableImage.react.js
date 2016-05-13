import './clickable-image.scss';
import React from 'react';


export default ({ src, caption, onClick }) => (
   <div className="clickable-image" onClick={ onClick }>
      <img src={ src } />
      <span className="caption">{ caption }</span>
   </div>
);

