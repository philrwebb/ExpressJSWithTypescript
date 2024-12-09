import { TimeLimitedPersistableBase } from '../persistance/TimeLimitedPersistableBase';

export interface ReferenceBase extends TimeLimitedPersistableBase {
  typeShortDescription: string;
  typeLongDescription: string;
  code: string;
}
