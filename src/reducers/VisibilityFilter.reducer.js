export const initialState = [
   { filter: 'architecture', visible: true },
   { filter: 'text', visible: true },
   { filter: 'video', visible: true },
   { filter: 'fabriction', visible: true },
   { filter: 'design', visible: true },
   { filter: 'audio', visible: true }
];

/**
 * VisibilityFilter
 *
 * @param {Array}  state
 * @param {Object} action
 *
 * @return {Array}
 */
export function VisibilityFilter(state = initialState, action) {

   switch (action.type) {

      case 'TOGGLE_VISIBILITY_FILTER':

         return state.map((value) => {

               if(value.filter !== action.filter) {
                  return value;
               }

               return {...value, visible: !value.visible};
         });

      default:
         return state;

   };
};
