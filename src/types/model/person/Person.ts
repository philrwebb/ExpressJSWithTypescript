import { PersistableBase } from '../persistance/PersistableBase';

export interface Person extends PersistableBase {
  givenNames: string;
  lastName: string;
  dob: Date;
}
