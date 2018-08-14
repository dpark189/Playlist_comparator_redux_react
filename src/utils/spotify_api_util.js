import $ from 'jquery';

export const fetchSpotPlaylist = (spotUserId, spotPlaylistId, authToken) => {
  return $.ajax({
      method: 'GET',
      url: `https://api.spotify.com/v1/users/${spotUserId}/playlists/${spotPlaylistId}` + "?market=ES&fields=tracks.items(track(external_ids(isrc)))",
      contentType: 'application/json',
      headers: {
        'Authorization' : 'Bearer ' + authToken,
      },
  });
};
