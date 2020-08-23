import * as TagFilterAction from '../../enums/impinj/TagFilterAction';
import * as TagMemoryBank from '../../enums/impinj/TagMemoryBank';

export type v1 = {
  action: TagFilterAction.v1;
  tagMemoryBank: TagMemoryBank.v1;
  bitOffset: number;
  mask: string;
  maskLength: number;
};
