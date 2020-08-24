import * as InventorySearchMode from '../../enums/impinj/InventorySearchMode';
import * as FilterLink from '../../enums/impinj/FilterLink';
import * as TagFilterAction from '../../enums/impinj/TagFilterAction';
import * as TagMemoryBank from '../../enums/impinj/TagMemoryBank';
import * as FastId from '../../enums/impinj/FastId';

export type v1 = {
  antennaPort: number;
  transmitPowerCdbm: number;
  rfMode: number;
  inventorySession: number;
  inventorySearchMode: InventorySearchMode.v1;
  estimatedTagPopulation: number;
  filtering: {
    filters: {
      action: TagFilterAction.v1;
      tagMemoryBank: TagMemoryBank.v1;
      bitOffset: number;
      mask: string;
      maskLength: number;
    }[];
    filterLink: FilterLink.v1;
  };
  powerSweeping: {
    minimumPowerCdbm: number;
    stepSizeCdb: number;
  };
  fastId: FastId.v1;
  receiveSensitivityDbm: number;
};
