import { Router } from 'express';

import Controller from '@structures/Controller';

class UserController extends Controller {
  constructor(app) {
    super('user', app);
  }

  register(): void {
    const route = Router();

    route.get('/', (req, res) => {
      res.send('User');
    });

    this.app.use('/users', route);
  }
}

export default UserController;
