import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

import { PublicKey } from './public_keys';

@Injectable()
export class PublicKeyService {
  storage: Storage = null;

  // Init an empty DB if it does not exist by now!
  constructor() {
    this.storage = new Storage(SqlStorage);
    this.createTable();
  }

  // Get all public keys for a given manifacturer
  public getPublicKeys(manifacturer: string) {
    query = 'SELECT * FROM public_keys WHERE manifacturer = ?'
    params = [manifacturer]
    return this.storage.query(query, params);
  }

  // Store a new public key in the DB
  public savePublicKey(public_key: PublicKey) {
    query = 'INSERT INTO public_keys (manifacturer, key, expiration) VALUES (?,?,?)';
    params = [PublicKey.manifacturer, PublicKey.key, PublicKey.expiration];
    return this.storage.query(query, params);
  }

  // Delete all public keys for the given manifacturer
  public deletePublicKeys(manifacturer: string) {
    query = 'DELETE FROM public_keys WHERE manifacturer = ?';
    params = [manifacturer]
    this.storage.query(query, paramater);
  }

  private createTable() {
    this.storage.query('\
    CREATE TABLE IF NOT EXISTS public_keys ( \
        id            INTEGER PRIMARY KEY AUTOINCREMENT, \
        manifacturer  TEXT, \
        key           TEXT, \
        expiratione   DATETIME)');
  }

  public initDB() {
    this.storage.query('DROP TABLE IF EXISTS public_keys');
    this.createTable();
  }
}
