import React from 'react';
import { Link } from 'react-router';

/**
 * A project link with tags, etc
 */
export default (props) => (
    <Link activeClassName="active" {...props} />
);
