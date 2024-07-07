import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
     try {
        const dbString = await fs.readFile(PATH_DB, 'utf-8');
        const db = JSON.parse(dbString);
        const updatedData = db.slice(0, -1);
        await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));
    } catch (error) { console.error(error); }
};

removeLastContact();
