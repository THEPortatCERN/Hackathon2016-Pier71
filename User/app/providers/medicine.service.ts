import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

import { Medicine } from './medicine';

@Injectable()
export class MedicineService {
  storage: Storage = null;

  // Init an empty DB if it does not exist by now!
  constructor() {
    this.storage = new Storage(SqlStorage);
    this.createTable();
  }

  // Get all notes of our DB
  public getMedicine() {
    return this.storage.query('SELECT * FROM medicine');
  }

  /**
   * Save a project into a database
   */
  public saveMedicine(medicine: Medicine) {
    let sql = 'INSERT INTO medicine (title, producer, description, img, genuine, date_produced, date_expire, date_scanned) VALUES (?,?,?,?,?,?,?,?)';
    return this.storage.query(sql, [medicine.title, medicine.producer, medicine.description, medicine.img, medicine.genuine, medicine.date_produced, medicine.date_expire, medicine.date_scanned]);
  }

  // Update an existing note with a given ID
  public updateMedicine(medicine: Medicine) {
    let sql = 'UPDATE medicine SET '
                + 'title = \"' + medicine.title + '\", '
                + 'producer = \"' + medicine.producer + '\", '
                + 'description = \"' + medicine.description + '\", '
                + 'img = \"' + medicine.img + '\", '
                + 'genuine = \"' + medicine.genuine + '\", '
                + 'date_produced = \"' + medicine.date_produced + '\", '
                + 'date_expire = \"' + medicine.date_expire + '\", '
                + 'date_scanned = \"' + medicine.date_scanned + '\"'
               + 'WHERE id = \"' + medicine.id + '\"';
    this.storage.query(sql);
  }

  // Remoe a not with a given ID
  public removeMedicine(medicine: Medicine) {
    let sql = 'DELETE FROM medicine WHERE id = \"' + medicine.id + '\"';
    this.storage.query(sql);
  }

  private createTable() {
    this.storage.query('\
    CREATE TABLE IF NOT EXISTS medicine ( \
        id            INTEGER PRIMARY KEY AUTOINCREMENT, \
        title         TEXT, \
        producer      TEXT, \
        description   TEXT, \
        img           TEXT, \
        genuine       BOOLEAN, \
        date_produced DATETIME, \
        date_expire   DATETIME, \
        date_scanned  DATETIME)');
  }

  public initDB() {
    this.storage.query('DROP TABLE IF EXISTS medicine');
    this.createTable();
  }
}
