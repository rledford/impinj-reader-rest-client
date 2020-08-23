import * as TagFilter from './TagFilter';
import * as FilterLink from '../../enums/impinj/FilterLink';

export type v1 = {
  filters: TagFilter.v1[];
  filterLink: FilterLink.v1;
};
