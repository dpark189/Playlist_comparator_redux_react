import React from 'react';
import queryString from 'query-string';
import JsonDisp from './json_disp';

class Comparator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyPlaylist: this.props.spotifyPlaylist,
      applePlaylist: this.props.applePlaylist
    };
    this.count = 0;
    this.comparePls = this.comparePls.bind(this);
  }

  componentDidMount(){
    const values = queryString.parse(this.props.location.search);
    // values are contain spotify and apple playlist ids
    // to use fetch actual api data, fetchSpotPlaylist and fetchApplePlaylist would be used here instead using .then() between calls to account for async

    // using sample data,
    this.props.receiveSampleSpotPlaylist();
    this.props.receiveSampleApplePlaylist();
  }

  componentWillReceiveProps(newProps){

    this.setState({
      spotifyPlaylist: newProps.spotifyPlaylist,
      applePlaylist: newProps.applePlaylist
    });
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
    let count = 0;
    main.forEach( id => {
      if (other.includes(id)) {
        count += 1;
      }
    });
    this.count = count;
  }
  render(){
    if (this.state.spotifyPlaylist.length === 0 && this.state.applePlaylist.length === 0) {
    } else {
      this.comparePls();
    }

    const jsonResponse = {count: this.count};

    return (
      <JsonDisp json={JSON.stringify(jsonResponse)}/>
    );
  }
}

export default Comparator;
