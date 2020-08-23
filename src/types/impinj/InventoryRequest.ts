import * as InventoryAntennaConfiguration from './InventoryAntennaConfiguration';
import * as InventoryStartTrigger from './InventoryStartTrigger';
import * as InventoryStopTrigger from './InventoryStopTrigger';

export type v1 = {
  antennaConfigs: InventoryAntennaConfiguration.v1[];
  channelFrequencyKHz: number[];
  startTriggers: InventoryStartTrigger.v1[];
  stopTriggers: InventoryStopTrigger.v1[];
};
