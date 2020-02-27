import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

export async function dirFiles(
  dir: string,
  replaceExtension: boolean
): Promise<object> {
  const files: string[] = await readdir(dir).catch(() => []);
  const filesObject = {};

  const getReplace = (value: string): string => {
    return replaceExtension ? value.split(/\./)[0] : value;
  };

  return Promise.all(
    files.map(async file => {
      const fileDir = path.resolve(dir, file);
      const isDirectory: boolean = await stat(fileDir).then(f =>
        f.isDirectory()
      );
      if (isDirectory) {
        const directoryFiles = await dirFiles(fileDir, replaceExtension);
        Object.entries(directoryFiles).forEach(([k, v]) => {
          filesObject[getReplace(k)] = v;
        });
      } else filesObject[getReplace(file)] = await import(fileDir);

      return file;
    })
  ).then(() => filesObject);
}
