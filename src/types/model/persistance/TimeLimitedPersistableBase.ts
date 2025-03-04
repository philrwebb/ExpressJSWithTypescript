import { PersistableBase } from '../persistance/PersistableBase';

export interface TimeLimitedPersistableBase extends PersistableBase {
  effFrom: Date;
  effTo: Date;
}
