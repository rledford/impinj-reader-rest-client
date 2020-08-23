import * as InventoryStatus from '../../enums/impinj/InventoryStatus';
import * as MqttBrokerConnectionStatus from '../../enums/impinj/MqttBrokerConnectionStatus';

export type v1 = {
  status: InventoryStatus.v1;
  time: string; // ISO 8601 format
  serialNumber: string;
  mqttBrokerConnectionStatus: MqttBrokerConnectionStatus.v1;
};
