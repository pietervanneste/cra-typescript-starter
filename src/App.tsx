import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './containers/dashboard/Dashboard';

@observer
class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="App">
        <div className="App-header">Breaking News</div>
        <Switch>
          <Route path={'/'} component={Dashboard} exact />
        </Switch>
        <DevTools />
      </div>
    );
  }
}

export default App;
