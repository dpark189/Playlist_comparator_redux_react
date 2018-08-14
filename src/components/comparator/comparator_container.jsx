import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpotPlaylist } from '../../actions/spotify_actions';
// import Comparator from './comparator';

const mdp = (dispatch) => {
  return {
    fetchSpotPlaylist: (spotUserId, spotPlaylistId, authToken) => dispatch(fetchSpotPlaylist(spotUserId, spotPlaylistId, authToken))
  };
};

// export default withRouter(connect(null, mdp)(Comparator));
