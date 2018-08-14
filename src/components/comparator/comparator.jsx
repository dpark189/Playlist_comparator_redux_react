import React from 'react';
import queryString from 'query-string';

class Comparator extends React.Component {
  constructor(props) {
    super(props);
    this.comparePls = this.comparePls.bind(this);
  }

  componentDidMount(){
    const values = queryString.parse(this.props.location.search);
    this.props.receiveSampleSpotPlaylist();
    this.props.receiveSampleApplePlaylist();
  }

  comparePls() {
    const spot = this.props.spotifyPlaylist;
    const apple = this.props.applePlaylist;
    let other;
    let main;
    if (spot.length <= apple.length) {
      main = spot;
      other = apple;
    } else {
      main = apple;
      other = spot;
    }
    debugger
    let count = 0;

  }
  render(){
    if (typeof this.props.spotifyPlaylist !== "undefined" && typeof this.props.applePlaylist !== "undefined") {
      this.comparePls();
    }
    return (
      <h1>hi agaiin</h1>
    );
  }
}

export default Comparator;
