import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Comparator from './comparator/comparator_container';
import Placeholder from './placeholder';

class App extends React.Component {

  render(){
    return (
      <div>
        <Switch >
          <Placeholder exact path="/" />
          <Route path="/compare-playlists" component={Comparator}/>
        </Switch>
      </div>
    );
  }
}

export default App;

{/* <Route path="/" component={Comparator}/>  */}
