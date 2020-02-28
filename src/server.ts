import { Application } from 'express';

import app from './app';
import { register as registerRoutes } from './router';

class Server {
  app: Application;

  constructor() {
    this.app = app;

    this.init();
  }

  async init(): Promise<void> {
    //   const routes = await registerRoutes(this.app);
    await registerRoutes(this.app);
  }
}

export default new Server();
