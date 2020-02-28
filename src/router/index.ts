import Controller from '@structures/Controller';

import User from './controllers/User';

export const routes = [User];

export function register(app): Promise<Controller[]> {
  return Promise.all(routes.map(Route => new Route(app).load()));
}
