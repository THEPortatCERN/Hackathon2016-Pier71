import {Component}     from '@angular/core';
import {NavController} from 'ionic-angular';

import { Medicine }           from '../../providers/medicine';
import { Transaction }        from '../../providers/transaction';
import { DateFormat }         from '../../pipes/date_format';
import { MedicineService }    from '../../providers/medicine.service';
import { TransactionService } from '../../providers/transaction.service';

@Component({
  templateUrl: 'build/pages/about/about.html',
  pipes: [DateFormat]
})

export class AboutPage {
  public medicine: Medicine;

  constructor(private navCtrl: NavController, private medicineService: MedicineService, private transactionService: TransactionService) {
  }

  public initDB() {
    this.medicineService.initDB();
    this.transactionService.initDB();

    this.medicineService.saveMedicine(new Medicine(null, "Drug name 1", "Producer1", "Lorem ipsum dolor sit amet", "drug1.jpg", true, new Date("2016-10-09"), new Date("2016-11-18"), new Date("2016-11-18")));
    this.medicineService.saveMedicine(new Medicine(null, "Drug name 2", "Producer2", "Lorem ipsum dolor sit amet", "drug2.jpg", true, new Date("2016-09-18"), new Date("2016-11-11"), new Date("2016-12-18")));
    this.medicineService.saveMedicine(new Medicine(null, "Drug name 3", "Producer3", "Lorem ipsum dolor sit amet", "drug3.jpg", true, new Date("2016-08-11"), new Date("2016-11-20"), new Date("2016-11-18")));
    this.medicineService.saveMedicine(new Medicine(null, "Drug name 4", "Producer4", "Lorem ipsum dolor sit amet", "drug4.jpg", false, new Date("2016-07-17"), new Date("2016-11-15"), new Date("2017-11-09")));

    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-09"), "produced", "46.207135 6.147754", "Producer1", "Produced and pact at the factory", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-09"), "packed", "46.207135 6.147754", "Facility1", "Packed into boxes", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-10"), "sent", "46.207135 6.147754", "Facility1", "Left facility 1", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-10"), "recieved", "42.007135 6.147754", "Facility2", "Recieved facility 2", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-15"), "sent", "42.007135 6.147754", "Facility2", "Left facility 2", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-15"), "recieved", "182.007135 6.147754", "Facility3", "Recieved facility 3", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-15"), "tested", "182.007135 6.147754", "Facility3", "Tested at facility 3", true));
    this.transactionService.saveTransaction(new Transaction(null, 1, new Date("2016-10-16"), "sold", "182.007135 6.147754", "Facility3", "Sold at facility 3", true));
  }
}
