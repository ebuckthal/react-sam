import { combineReducers } from 'redux';
//import { Features as features } from './Features.reducer';
import { VisibilityFilter as filters } from './VisibilityFilter.reducer';
import { Projects as projects } from './Projects.reducer';

export default combineReducers({
      filters,
      projects
});
