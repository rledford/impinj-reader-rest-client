import ImpinjReaderRestClientOptions from '../types/ImpinjReaderResetClientOptions';
import ApiV1 from '../interfaces/IApiV1';
import * as Api from './Api';

export default class ImpinjReaderRestClient {
  secure: boolean = false;
  hostname: string = '127.0.0.1';
  port: number = 80;
  username: string = 'root';
  password: string = '******';
  timeout: number = 5000;
  api: {
    v1: ApiV1;
  };

  constructor(options: ImpinjReaderRestClientOptions) {
    Object.assign(this, options);
    this.api = {
      v1: Api.v1(this)
    };
  }
}
