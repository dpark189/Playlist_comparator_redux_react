import { combineReducers } from 'redux';
import spotifyPlaylist from './spotify_playlist_reducer';
import ApplePlaylist from './apple_playlist_reducer';

export default combineReducers({spotifyPlaylist});
