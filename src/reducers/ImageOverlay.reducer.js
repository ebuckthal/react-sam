const initialState = {
   url: null
};

export function ImageOverlay(state = initialState, action) {

   console.log(action);

   switch(action.type) {

      case 'SET_IMAGE_OVERLAY':

         return {
            src: action.src
         };

      case 'REMOVE_IMAGE_OVERLAY':

         return {
            src: null 
         };

      default:
      return state;
   }
}
