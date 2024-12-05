import express from 'express';
// import { Request, Response } from 'express-serve-static-core';
import { PersistableBase } from '../types/model/persistence/PersistableBase';
import { Repository } from '../repositories/Repository';
import { InMemoryRepository } from '../repositories/InMemoryRepository';
import { zodValidationMiddleware } from '../middleware/zodValidationMiddleware';
import { ZodSchema } from 'zod';
import { GenericHandler } from './handler';

export const createRoutesForType = <T extends PersistableBase>(
  app: express.Application,
  type: string,
  schema: ZodSchema<any>,
  repo: Repository<T> = new InMemoryRepository<T>(),
) => {
  const handler = new GenericHandler<T>(repo);
  var router = express.Router();
  router.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl} for ${type} at ${Date.now()}`);
    next();
  });
  router.get(`/`, handler.getAll);
  router.get(`/:id`, handler.getById);
  router.post(`/`, zodValidationMiddleware(schema), handler.create);
  router.put(`/:id`, zodValidationMiddleware(schema), handler.update);
  router.delete(`:id`, handler.delete);
  app.use(`/${type}`, router);
};
