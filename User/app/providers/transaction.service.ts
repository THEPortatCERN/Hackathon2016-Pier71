import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

import { Transaction } from './transaction';

@Injectable()
export class TransactionService {
  storage: Storage = null;

  // Init an empty DB if it does not exist by now!
  constructor() {
    this.storage = new Storage(SqlStorage);
    this.createTable();
  }

  // Get all transactions of our DB
  public getTransactions(id: number) {
    return this.storage.query('SELECT * FROM block_transaction WHERE medicine_id = \"' + id + '\"');
  }

  /**
   * Save a project into a database
   */
  public saveTransaction(transaction: Transaction) {
    let sql = 'INSERT INTO block_transaction (medicine_id, date, action, gps, entity_name, comment, genuine) VALUES (?,?,?,?,?,?,?)';
    return this.storage.query(sql, [transaction.medicine_id, transaction.date, transaction.action, transaction.gps, transaction.entity_name, transaction.comment, transaction.genuine]);
  }

  // Update an existing note with a given ID
  public updateTransaction(transaction: Transaction) {
    let sql = 'UPDATE block_transaction SET '
                + 'medicine_id = \"' + transaction.medicine_id + '\", '
                + 'date = \"' + transaction.date + '\", '
                + 'action = \"' + transaction.action + '\", '
                + 'gps = \"' + transaction.gps + '\", '
                + 'entity_name = \"' + transaction.entity_name + '\", '
                + 'comment = \"' + transaction.comment + '\", '
                + 'genuine = \"' + transaction.genuine + '\", '
               + 'WHERE id = \"' + transaction.id + '\"';
    this.storage.query(sql);
  }

  // Remoe a not with a given ID
  public removeTransaction(transaction: Transaction) {
    let sql = 'DELETE FROM transaction WHERE id = \"' + transaction.id + '\"';
    this.storage.query(sql);
  }

  private createTable() {
    this.storage.query('\
    CREATE TABLE IF NOT EXISTS block_transaction ( \
        id            INTEGER PRIMARY KEY AUTOINCREMENT, \
        medicine_id   INTEGER, \
        date          TEXT, \
        action        TEXT, \
        gps           TEXT, \
        entity_name   TEXT, \
        comment       DATETIME, \
        genuine       BOOLEAN)');
  }

  public initDB() {
    this.storage.query('DROP TABLE IF EXISTS block_transaction');
    this.createTable();
  }
}
