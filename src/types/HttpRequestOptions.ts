import HttpMethod from '../enums/HttpMethod';

type HttpRequestOptions = {
  secure?: boolean;
  method?: HttpMethod;
  hostname?: string;
  port?: number;
  path?: string;
  headers?: { [prop: string]: string };
  payload?: any;
  json?: boolean;
  username?: string;
  password?: string;
  timeout?: number;
};

export default HttpRequestOptions;
