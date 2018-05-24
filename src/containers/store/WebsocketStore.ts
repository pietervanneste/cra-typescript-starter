import { observable } from 'mobx';
import {} from '../../constants';

export default class WebsocketStore {
  @observable public isConnecting = false;
  @observable public isConnected = false;
}
