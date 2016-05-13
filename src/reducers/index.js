import { combineReducers } from 'redux';
//import { Features as features } from './Features.reducer';
import { VisibilityFilter as filters } from './VisibilityFilter.reducer';
import { Projects as projects } from './Projects.reducer';
import { ImageOverlay as image } from './ImageOverlay.reducer'; 

export default combineReducers({
      filters,
      projects,
      image
});
