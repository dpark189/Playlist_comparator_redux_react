import * as AppleAPIUtil from '../utils/apple_api_util';
import sampleApple from '../../sample_apple_playlist.js';

export const RECEIVE_APPLE_PLAYLIST = 'RECEIVE_APPLE_PLAYLIST';
export const RECEIVE_SAMPLE_APPLE_PLAYLIST = "RECEIVE_SAMPLE_APPLE_PLAYLIST";

export const receiveApplePlaylist = (playlist) => {
  const data = playlist.data;
  const isrcs = data.tracks.data.map( track => {
    return track.attributes.isrc;
  });
  return {
    type: RECEIVE_APPLE_PLAYLIST,
    isrcs: isrcs
  };
};

export const receiveSampleApplePlaylist = () => {
  const data = sampleApple.data[0];
  const isrcs = data.relationships.tracks.data.map( data => {
    return data.attributes.isrc;
  });
  return {
    type: RECEIVE_SAMPLE_APPLE_PLAYLIST,
    isrcs: isrcs
  };
};


export const fetchApplePlaylist = (appleStoreFront, applePlaylistId) => {
  return dispatch => {
    return AppleAPIUtil.fetchApplePlaylist(appleStoreFront, applePlaylistId).then(
      (playlist) => dispatch(receiveApplePlaylist(playlist))
    );
  };
};
