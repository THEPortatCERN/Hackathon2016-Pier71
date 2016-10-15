import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';

import { Medicine }        from '../../providers/medicine';
import { Transaction }     from '../../providers/transaction';
import { MedicineService } from '../../providers/medicine.service';
import { DetailPage }      from '../detail/detail'
import { DateFormat }      from '../../pipes/date_format';

@Component({
  templateUrl: 'build/pages/history/history.html',
  pipes: [DateFormat]
})
export class HistoryPage {
  public medicine: Medicine[];

  constructor(private navCtrl: NavController, public medicineService: MedicineService) {

  }

  private loadMedicine() {
    this.medicineService.getMedicine().then(
      data => {
        this.medicine = [];
        if (data.res.rows.length > 0) {
          for (var i = 0; i < data.res.rows.length; i++) {
            let item = data.res.rows.item(i);
            this.medicine.push(new Medicine(item.id, item.title, item.producer, item.description, item.img, JSON.parse(item.genuine), item.date_produced, item.date_expire, item.date_scanned));
          }
        }
      }
    );
  }

  private onPageDidEnter() {
    this.loadMedicine();
  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailPage, {
      medicine: item
    });
  }
}
