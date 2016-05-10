import React from 'react';
import { connect } from 'react-redux';
import FilterBar from 'components/filterBar/FilterBar.react';
import { toggleVisibilityFilter } from 'actions';

const FilterBarContainer = (props) => (
   <FilterBar {...props} />
);

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch) => {
   return {
      onFilterButtonClick: (filter) => {
         dispatch(toggleVisibilityFilter(filter));
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBarContainer);
