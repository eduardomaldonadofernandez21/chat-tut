import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '6666c5bc0014fb56296b';
export const DATABASE_ID = '6666c6ff0028c74c8d00';
export const COLLECTION_ID_MESSAGES = '6666c70700025fe96773';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6666c5bc0014fb56296b');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;