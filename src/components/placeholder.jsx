import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1> hello </h1>
      <Link to="/compare-playlists?spotify=no_match&appleMusic=no_match">
        Click to compare sample data with no matches
      </Link>
    </div>
  );
};
