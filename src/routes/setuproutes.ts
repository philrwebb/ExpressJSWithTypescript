import express from 'express';
import { createRoutesForType } from '../handlers/createRoutesForType';
import { Person } from '../types/model/person/Person';
import { GenderType } from '../types/model/referencedata/GenderType';
import { CreatePersonSchema } from '../schemas/CreatePersonSchema';
import { CreateGenderTypeSchema } from '../schemas/CreateGenderTypeSchema';
import { FileRepository } from '../repositories/FileRepository';

export const setupRoutes = (app: express.Application) => {
  createRoutesForType<Person>(
    app,
    'people',
    CreatePersonSchema,
    new FileRepository<Person>('./data/people.json'),
  );
  createRoutesForType<GenderType>(
    app,
    'genderTypes',
    CreateGenderTypeSchema,
    new FileRepository<GenderType>('./data/genderTypes.json'),
  );
};
