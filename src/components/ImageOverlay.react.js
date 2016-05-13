import './image-overlay.scss';
import React from 'react';

export default ({ src, onClick }) => (
   <div className="image-overlay" onclick={ onClick }>
      <img src={ src } />
   </div>
);
