import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteProps } from 'react-router';

import messages from './messages';

export default class Home extends React.Component<RouteProps, any> {
  public render() {
    return (
      <React.Fragment>
        <h1>
          <FormattedMessage {...messages.title} />
        </h1>
      </React.Fragment>
    );
  }
}
