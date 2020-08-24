import ImpinjReaderRestClientOptions from '../types/ImpinjReaderResetClientOptions';
import v1 from '../interfaces/api/v1';
import * as Api from './api';

export default class ImpinjReaderRestClient {
  secure: boolean = false;
  hostname: string = '127.0.0.1';
  port: number = 80;
  username: string = 'root';
  password: string = '******';
  timeout: number = 5000;
  api: {
    v1: v1;
  };

  constructor(options: ImpinjReaderRestClientOptions) {
    Object.assign(this, options);
    this.api = {
      v1: Api.v1(this)
    };
  }
}
