import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

import { PublicKey } from './public_key';

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
    var query = 'SELECT * FROM public_key WHERE manifacturer = ?'
    var params = [manifacturer]
    return this.storage.query(query, params);
  }

  // Store a new public key in the DB
  public savePublicKey(public_key: PublicKey) {
    var query = 'INSERT INTO public_key (manifacturer, key, expiration) VALUES (?,?,?)';
    var params = [public_key.manifacturer, public_key.key, public_key.expiration];
    return this.storage.query(query, params);
  }

  // Delete all public keys for the given manifacturer
  public deletePublicKeys(manifacturer: string) {
    var query = 'DELETE FROM public_key WHERE manifacturer = ?';
    var params = [manifacturer]
    this.storage.query(query, params);
  }

  private createTable() {
    this.storage.query('\
    CREATE TABLE IF NOT EXISTS public_key ( \
        id            INTEGER PRIMARY KEY AUTOINCREMENT, \
        manifacturer  TEXT, \
        key           TEXT, \
        expiratione   DATETIME)');
  }

  public initDB() {
    this.storage.query('DROP TABLE IF EXISTS public_key');
    this.createTable();
  }
}
