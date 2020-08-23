export type v1 = {
  active: boolean;
  brokerHostname: string;
  brokerPort: number;
  cleanSession: boolean;
  clientId: string;
  eventQualityOfService: number;
  eventTopic: string;
  keepAliveInterval: number;
  username: string;
  password: string;
  willTopic: string;
  willMessage: string;
  willQualityOfService: string;
};
