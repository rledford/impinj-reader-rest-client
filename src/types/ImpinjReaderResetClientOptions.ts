import ApiVersion from '../enums/ApiVersion';

type ImpinjReaderRestClientOptions = {
  secure?: boolean;
  hostname?: string;
  port?: number;
  username?: string;
  password?: string;
  timeout?: number;
};

export default ImpinjReaderRestClientOptions;
