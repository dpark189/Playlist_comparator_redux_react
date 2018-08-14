import { merge } from 'lodash';
import { RECEIVE_SPOT_PLAYLIST, RECEIVE_SAMPLE_SPOT_PLAYLIST } from '../actions/spotify_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SPOT_PLAYLIST:
    case RECEIVE_SAMPLE_SPOT_PLAYLIST:
      return action.isrcs;
    default:
      return state;
  }
};
