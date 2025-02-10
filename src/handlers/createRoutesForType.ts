import express from 'express';
// import { Request, Response } from 'express-serve-static-core';
import { PersistableBase } from '../types/model/persistance/PersistableBase';
import { Repository } from '../repositories/Repository';
import { FileRepository } from '../repositories/FileRepository';
import { zodValidationMiddleware } from '../middleware/zodValidationMiddleware';
import { ZodSchema } from 'zod';
import { GenericHandler } from './handler';

export const createRoutesForType = <T extends PersistableBase>(
  app: express.Application,
  type: string,
  schema: ZodSchema<any>,
  repo: Repository<T> = new FileRepository<T>(`./data/${type}.json`),
) => {
  const handler = new GenericHandler<T>(repo);
  var router = express.Router();
  router.use((req, res, next) => {
    next();
  });
  router.get(`/`, handler.getAll);
  router.get(`/:id`, handler.getById);
  router.delete(
    `/:id`,
    (req, res, next) => {
      next();
    },
    handler.delete,
  );
  router.post(`/`, zodValidationMiddleware(schema), handler.create);
  router.put(`/:id`, zodValidationMiddleware(schema), handler.update);
  app.use(`/${type}`, router);
};
