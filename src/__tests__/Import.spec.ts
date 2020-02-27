import * as Lib from '..';

const importHelpers = ['Structures'];
const noImports: string[] = [];

describe('Root Import', () => {
  it('Have imports', done => {
    const imports = Object.keys(Lib);
    const haveAllImports = !importHelpers.every(helper => {
      const hasImport = !!imports[helper];
      if (!hasImport) noImports.push(helper);
      return hasImport;
    });

    if (!haveAllImports) {
      done(
        new Error(`No have ${noImports.map(n => `"${n}"`).join(', ')} import.`)
      );
    } else done();
  });
});
