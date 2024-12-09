import { PersistableBase } from '../persistance/PersistableBase';

export interface Address extends PersistableBase {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  suburb: string;
  postcode: string;
  state: string;
}
