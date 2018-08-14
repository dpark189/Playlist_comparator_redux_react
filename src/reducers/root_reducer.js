import { combineReducers } from 'redux';
import spotifyPlaylist from './spotify_playlist_reducer';
import applePlaylist from './apple_playlist_reducer';

export default combineReducers({ spotifyPlaylist, applePlaylist });
