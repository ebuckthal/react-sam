import React from 'react';
import { connect } from 'react-redux';
import ClickableImage from 'components/clickableImage/ClickableImage.react';

import { setImageOverlay } from 'actions';

const mapStateToProps = (state, ownProps) => {
   return ownProps;
};

const mapDispatchToProps = (dispatch, { src }) => {
   return {
      onClick: () => {
         console.log('onclick');
         dispatch(setImageOverlay(src));
      }
   };
};

const ClickableImageContainer = (props) => (
   <ClickableImage {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(ClickableImageContainer);
