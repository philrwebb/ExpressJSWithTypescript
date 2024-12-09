import { PersistableBase } from '../persistance/PersistableBase';

export interface Contact extends PersistableBase {
  details: string;
}
