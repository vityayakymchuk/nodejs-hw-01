import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
    const dbString = await fs.readFile(PATH_DB, 'utf-8');
        const db = JSON.parse(dbString);
        return db;
    } catch (error) { console.error(error); }

};

console.log(await getAllContacts());
