import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpotPlaylist, receiveSampleSpotPlaylist } from '../../actions/spotify_actions';
import { fetchApplePlaylist, receiveSampleApplePlaylist } from '../../actions/apple_actions';
import Comparator from './comparator';

const msp = (state, ownProps) => {
  return {
    applePlaylist: state.applePlaylist || [],
    spotifyPlaylist: state.spotifyPlaylist || []
  };
};

const mdp = (dispatch) => {
  return {
    fetchSpotPlaylist: (spotUserId, spotPlaylistId, authToken) => dispatch(fetchSpotPlaylist(spotUserId, spotPlaylistId, authToken)),
    receiveSampleSpotPlaylist: () => dispatch(receiveSampleSpotPlaylist()),
    receiveSampleApplePlaylist: () => dispatch(receiveSampleApplePlaylist())
  };
};

export default withRouter(connect(msp, mdp)(Comparator));
