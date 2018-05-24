import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './containers/home/Home';

@observer
class App extends React.Component<any, any> {
  public state = {
    count: 0
  };

  public updateText = (event: any) => {
    this.setState({ count: event.currentTarget.value });
  };
  public render() {
    return (
      <div className="App">
        <div className="App-header" />

        <p className="App-intro">
          To get started, edit To get started, edit To get started, edit{' '}
          <code>src/App.tsx</code> and save to reload.
        </p>
        <Switch>
          <Route path={'/'} component={Home} exact />
        </Switch>
        <DevTools />
      </div>
    );
  }
}

export default App;
