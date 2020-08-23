import * as InventoryFilterConfiguration from './InventoryFilterConfiguration';
import * as TransmitPowerSweepConfiguration from './TransmitPowerSweepConfiguration';
import * as InventorySearchMode from '../../enums/impinj/InventorySearchMode';
import * as FastId from '../../enums/impinj/FastId';

export type v1 = {
  antennaPort: number;
  transmitPowerCdbm: number;
  rfMode: number;
  inventorySession: number;
  inventorySearchMode: InventorySearchMode.v1;
  estimatedTagPopulation: number;
  filtering: InventoryFilterConfiguration.v1;
  powerSweeping: TransmitPowerSweepConfiguration.v1;
  fastId: FastId.v1;
  receiveSensitivityDbm: number;
};
