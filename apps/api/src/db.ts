import { MongoClient, Db } from 'mongodb';
import { config } from '@task/config';

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectToDatabase() {
  if (db) {
    return db;
  }

  if (!client) {
    client = new MongoClient(config.db.mongodb.uri);
    await client.connect();
  }

  db = client.db(config.db.mongodb.dbName);
  return db;
}

export async function getDatabase() {
  if (!db) {
    return await connectToDatabase();
  }
  return db;
}
