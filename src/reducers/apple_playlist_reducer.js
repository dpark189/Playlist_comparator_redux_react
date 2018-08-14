import { merge } from 'lodash';
import { RECEIVE_APPLE_PLAYLIST, RECEIVE_SAMPLE_APPLE_PLAYLIST } from '../actions/apple_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPLE_PLAYLIST:
    case RECEIVE_SAMPLE_APPLE_PLAYLIST:
      return action.isrcs;
    default:
      return state;
  }
};
