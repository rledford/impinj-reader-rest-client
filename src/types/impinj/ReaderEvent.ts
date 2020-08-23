import * as TagInventoryEvent from './TagInventoryEvent';
import * as AntennaConnectedEvent from './AntennaConnectedEvent';
import * as AntennaDisconnectedEvent from './AntennaDisconnectedEvent';
import * as InventoryStatusEvent from './InventoryStatusEvent';
import * as InventoryTerminatedEvent from './InventoryTerminatedEvent';

export type v1 = {
  timestamp: string; // ISO 8601 format
  // Any ONE of the following events will be included in the actual ReaderEvent
  tagInventoryEvent?: TagInventoryEvent.v1;
  antennaConnectedEvent?: AntennaConnectedEvent.v1;
  antennaDisconnectedEvent?: AntennaDisconnectedEvent.v1;
  inventoryStatusEvent?: InventoryStatusEvent.v1;
  inventoryTerminatedEvent?: InventoryTerminatedEvent.v1;
};
