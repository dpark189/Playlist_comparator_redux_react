import * as SpotifyAPIUtil from '../utils/spotify_api_util';
import { sampleSpot } from '../../sample_spotify_playlist';

export const RECEIVE_SPOT_PLAYLIST = 'RECEIVE_SPOT_PLAYLIST';
export const RECEIVE_SAMPLE_SPOT_PLAYLIST = 'RECEIVE_SAMPLE_SPOT_PLAYLIST';

export const receiveSpotPlaylist = (playlist) => {
  const isrcs = playlist.tracks.items.map( item => {
    return item.track.external_ids.isrc;
  });
  return {
    type: RECEIVE_SPOT_PLAYLIST,
    isrcs: isrcs
  };
};

export const receiveSampleSpotPlaylist = () => {
  const isrcs = sampleSpot.tracks.items.map( item => {
    return item.track.external_ids.isrc;
  });
  return {
    type: RECEIVE_SAMPLE_SPOT_PLAYLIST,
    isrcs: isrcs
  };
};


export const fetchSpotPlaylist = (spotUserId, spotPlaylistId, authToken) => {
  return dispatch => {
    return SpotifyAPIUtil.fetchSpotPlaylist(spotUserId, spotPlaylistId, authToken).then(
      (playlist) => dispatch(receiveSpotPlaylist(playlist))
    );
  };
};
