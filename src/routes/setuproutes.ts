import express from 'express';
import { createRoutesForType } from '../handlers/createRoutesForType';
import { FileRepository} from '../repositories/FileRepository';

import { Person } from '../types/model/person/Person';
import { CreatePersonSchema } from '../schemas/person/Person';
import { Employee } from '../types/model/person/Employee';
import { CreateEmployeeSchema } from '../schemas/person/Employee';
import { Address } from '../types/model/person/Address';
import { CreateAddressSchema } from '../schemas/person/Address';
import { Contact } from '../types/model/person/Contact';
import { CreateContactSchema } from '../schemas/person/Contact';
import { GenderType } from '../types/model/referencedata/GenderType';
import { CreateGenderTypeSchema } from '../schemas/referencedata/GenderType';
import { AddressType } from '../types/model/referencedata/AddressType';
import { CreateAddressTypeSchema } from '../schemas/referencedata/AddressType';
import { ContactType } from '../types/model/referencedata/ContactType';
import { CreateContactTypeSchema } from '../schemas/referencedata/ContactType';
import { Department } from '../types/model/person/Department';
import { CreateDepartmentSchema } from '../schemas/person/Department';
import { Account } from '../types/model/finance/Account';
import { CreateAccountSchema } from '../schemas/finance/Account';

export const setupRoutes = (app: express.Application) => {
  createRoutesForType<Person>(app, 'Person', CreatePersonSchema, new FileRepository<Person>('./data/Person.json'));
  createRoutesForType<Employee>(app, 'Employee', CreateEmployeeSchema, new FileRepository<Employee>('./data/Employee.json'));
  createRoutesForType<Address>(app, 'Address', CreateAddressSchema, new FileRepository<Address>('./data/Address.json'));
  createRoutesForType<Contact>(app, 'Contact', CreateContactSchema, new FileRepository<Contact>('./data/Contact.json'));
  createRoutesForType<GenderType>(app, 'GenderType', CreateGenderTypeSchema, new FileRepository<GenderType>('./data/GenderType.json'));
  createRoutesForType<AddressType>(app, 'AddressType', CreateAddressTypeSchema, new FileRepository<AddressType>('./data/AddressType.json'));
  createRoutesForType<ContactType>(app, 'ContactType', CreateContactTypeSchema, new FileRepository<ContactType>('./data/ContactType.json'));
  createRoutesForType<Department>(app, 'Department', CreateDepartmentSchema, new FileRepository<Department>('./data/Department.json'));
  createRoutesForType<Account>(app, 'Account', CreateAccountSchema, new FileRepository<Account>('./data/Account.json'));
};
