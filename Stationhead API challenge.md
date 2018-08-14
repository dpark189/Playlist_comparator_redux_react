Using a language and framework of your choice, write a webservice that will compare two playlists of songs and return a count of the tracks that both playlists have in common.  The playlists are hosted by our streaming partners, Spotify and AppleMusic, one playlist from each service.

Your webservice should respond to a url in the form of `https://<your-domain>.com/compare-playlists?spotify=<spotify_playlist_id>&appleMusic=<apple_music_playlist_id>`.  The response should be in JSON format with a single key `count`.

Note that the request only inlcudes the ids of the two playlists.  You will need to fetch the relevant data for the playlists yourself directly from the Spotify/AppleMusic API.  You can find the documentation for these services here:

https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist/
https://developer.apple.com/documentation/applemusicapi/get_a_catalog_playlist
[^0]

These APIs require authentication with a developer key.  For this challenge, you do not need to create a developer account with the services or write code to make authenticated requests--you can treat these API enpoints as open.  If you do so, you may want to create mock responses so you can test your code.

Both services provide an International Standard Recording Code (abbreviated `isrc`)  for each track. These identifiers should match for the same song on both services.[^1]

Although this challenge only includes a single route, you should structure your code like it is part of a larger project.

Please email me (andrew@stationhead.com) with a link to the repository that contains your code. Good luck!

[^0]Note that these APIs are paginated.
[^1]You can rely upon this assumption for this challenge.  The real world is a little more messy.
