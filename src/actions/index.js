/**
 * Actions
 */
export function toggleVisibilityFilter(filter) {
   return {
      type: 'TOGGLE_VISIBILITY_FILTER',
      filter: filter
   };
};

export function setImageOverlay(src) {
   return {
      type: 'SET_IMAGE_OVERLAY',
      src 
   }
}

export function removeImageOverlay() {
   return {
      type: 'REMOVE_IMAGE_OVERLAY'
   }
}
