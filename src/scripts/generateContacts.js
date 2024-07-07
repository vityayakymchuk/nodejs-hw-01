import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
    let contact = 0;
    const data = [];
    while (contact < number) {
        const fakeContact = createFakeContact();
        data.push(fakeContact);
        contact++;
    };
    try {
        const dbString = await fs.readFile(PATH_DB, 'utf-8');
        const db = JSON.parse(dbString);
        const updatedData = [...db, ...data];
        await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));
    } catch (error) { console.error(error); }
};

generateContacts(5);
