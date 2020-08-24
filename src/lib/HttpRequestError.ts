import EnhancedError from '../interfaces/EnhancedError';

export default class HttpRequestError implements EnhancedError {
  message: string = 'Http Request Error';
  code: string = 'HTTPREQUESTERROR';

  constructor(err: EnhancedError) {
    Object.assign(this, err);
  }
}
