import path from 'node:path';

const rootDir = path.join(process.cwd());
export const PATH_DB = path.resolve(rootDir,'src', 'db', 'db.json');