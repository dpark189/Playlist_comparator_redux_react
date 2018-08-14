import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store';
import { fetchSpotPlaylist, receiveSampleSpotPlaylist } from './actions/spotify_actions';
import { fetchApplePlaylist, receiveSampleApplePlaylist } from './actions/apple_actions';
import { sampleApple } from '../sample_apple_playlist';

import Root from './components/root.jsx';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchSpotPlaylist = fetchSpotPlaylist;
  window.receiveSampleSpotPlaylist = receiveSampleSpotPlaylist;
  window.fetchApplePlaylist = fetchApplePlaylist;
  window.receiveSampleApplePlaylist = () => {return receiveSampleApplePlaylist(sampleApple);};
});
