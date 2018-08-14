import $ from 'jquery';

export const fetchApplePlaylist = (appleStoreFront, applePlaylistId, authToken) => {
  return $.ajax({
      method: 'GET',
      url: `https://api.music.apple.com/v1/catalog/${appleStoreFront}/playlists/${applePlaylistId}`,
      contentType: 'application/json',
  });
};
