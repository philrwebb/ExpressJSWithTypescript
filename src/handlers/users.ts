import { Request, Response } from 'express-serve-static-core';
import { CreateUserDto } from '../dtos/CreatUser.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../types/response';

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

export function createUser(
  request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>,
) {
  const user: CreateUserDto = request.body;
  console.log(user);
  response.status(201).send({
    id: 1,
    username: 'a',
    email: 'a@a',
  });
}
