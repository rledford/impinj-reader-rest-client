import * as AntennaConfig from './AntennaConfig';
import * as GpiTransitionEvent from './GpiTransitionEvent';

export type v1 = {
  antennaConfigs: AntennaConfig.v1[];
  channelFrequenciesKHz: number[];
  startTriggers: {
    gpiTransitionEvent: GpiTransitionEvent.v1;
  }[];
  stopTriggers: {
    gpiTransitionEvent: GpiTransitionEvent.v1;
  };
};
