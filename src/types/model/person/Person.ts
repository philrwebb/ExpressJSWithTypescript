import { PersistableBase } from '../persistence/PersistableBase';

export interface Person extends PersistableBase {
  givenNames: string;
  lastName: string;
  dob: Date;
}
