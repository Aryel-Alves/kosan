import { Application } from 'express';

class ControllerStructure {
  name: string;

  app: Application;

  constructor(name: string, app: Application) {
    this.name = name;
    this.app = app;
  }

  load(): this {
    this.register();
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  register(): void {}
}

export default ControllerStructure;
