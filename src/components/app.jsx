import React from 'react';
import { Route } from 'react-router-dom';
import Comparator from './comparator/comparator_container';

class App extends React.Component {

  render(){
    return (
      <div>
        <Route path="/" component={Comparator}/>
      </div>
    );
  }
}

export default App;

{/* <Route path="/" component={Comparator}/>  */}
