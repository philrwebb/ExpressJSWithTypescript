import { PersistableBase } from '../persistance/PersistableBase';

export interface Department extends PersistableBase {
  departmentName: string;
}
