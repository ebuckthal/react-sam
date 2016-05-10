/**
 * Actions
 */
export function toggleVisibilityFilter(filter) {
   return {
      type: 'TOGGLE_VISIBILITY_FILTER',
      filter: filter
   };
};

export function banana() { return true; }
