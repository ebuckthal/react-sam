import expect from 'expect';
import { 
   VisibilityFilter as filterReducer,
   initialState
} from '../src/reducers/VisibilityFilter.reducer.js';

describe('visibility filter reducer', () => {

      it('should return the initial state', () => {
            expect(
               filterReducer(undefined, initialState)
            ).toEqual(initialState);
      });

      it('should handle TOGGLE_VISIBILITY_FILTER', () => {

            let beforeState = [{
                  filter: 'architecture',
                  visible: true
            }];

            let afterState = [{
                  filter: 'architecture',
                  visible: false 
            }];

            let action = {
               type: 'TOGGLE_VISIBILITY_FILTER',
               filter: 'architecture'
            };

            expect(
               filterReducer(beforeState, action)
            ).toEqual(afterState);
      })
});
