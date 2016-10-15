import {Component}                 from '@angular/core';
import {NavController, NavParams}  from 'ionic-angular';

import { Medicine }            from '../../providers/medicine';
import { Transaction }         from '../../providers/transaction';
import { TransactionService }  from '../../providers/transaction.service';
import { DateFormat }          from '../../pipes/date_format';

@Component({
  templateUrl: 'build/pages/detail/detail.html',
  pipes: [DateFormat]
})

export class DetailPage {
  public medicine: Medicine;
  public transactions: Transaction[];

  constructor(private navCtrl: NavController, navParams: NavParams, private transactionService: TransactionService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.medicine = navParams.get('medicine');
    this.loadTransactions(this.medicine.id);
  }

  private loadTransactions(id) {
    this.transactionService.getTransactions(id).then(
      data => {
        this.transactions = [];
        for (var i = 0; i < data.res.rows.length; i++) {
          let item = data.res.rows.item(i);
          this.transactions.push(new Transaction(item.id, item.medicine_id, item.date, item.action, item.gps, item.entity_name, item.comment, JSON.parse(item.genuine)));
        }
      }
    );
  }

  private onPageDidEnter() {
  }
}
