import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import App from './App';
import { translationMessages } from './i18n';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const routing = new RouterStore();

const browserHistory = createBrowserHistory();

// setup all stores
const history = syncHistoryWithStore(browserHistory, routing);

const stores = {
  routing
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <IntlProvider locale="en" messages={translationMessages.en}>
        <App history={history} />
      </IntlProvider>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
