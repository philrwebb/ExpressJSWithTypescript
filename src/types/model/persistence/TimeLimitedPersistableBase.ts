import { PersistableBase } from './PersistableBase';

export interface TimeLimitedPersistableBase extends PersistableBase {
  effFrom: Date;
  effTo: Date;
}
