import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    const newContact = createFakeContact();
    try {
        const dbString = await fs.readFile(PATH_DB, 'utf-8');
        const db = JSON.parse(dbString);
        const updatedData = [...db, newContact];
        await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));
    } catch (error) { console.error(error); }
};

addOneContact();
