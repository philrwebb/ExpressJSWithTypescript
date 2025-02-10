import { Request, Response } from 'express-serve-static-core';
import { PersistableBase } from '../types/model/persistance/PersistableBase';
import { Repository } from '../repositories/Repository';

export class GenericHandler<T extends PersistableBase> {
  constructor(private repository: Repository<T>) {
    // console.log('GenericHandler constructor');
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const items = await this.repository.getAll();
      res.send(items);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };

  getById = async (
    req: Request<{ id: string }>,
    res: Response<T | { message: string }>,
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      const item = await this.repository.getById(id);
      if (item) {
        res.send(item);
      } else {
        res.status(404).send({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };

  create = async (
    req: Request<{}, {}, T>,
    res: Response<T | { message: string }>,
  ) => {
    try {
      const newItem = await this.repository.create(req.body);
      res.status(201).send(newItem);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };

  update = async (
    req: Request<{ id: string }, {}, Partial<T>>,
    res: Response<T | { message: string }>,
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedItem = await this.repository.update(id, req.body);
      if (updatedItem) {
        res.send(updatedItem);
      } else {
        res.status(404).send({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<{ message: string }>,
  ) => {
    try {
      const id = parseInt(req.params.id, 10);
      const success = await this.repository.delete(id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  };
}
