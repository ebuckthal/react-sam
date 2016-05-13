import './image-overlay.scss';
import React from 'react';

export default ({ src, onClick }) => (
   <div 
   className="image-overlay" 
   style={{ backgroundImage: 'url(' + src + ')' }}
   onClick={ onClick }>
   </div>
);
