import {Component}     from '@angular/core';
import {NavController} from 'ionic-angular';

import { Medicine }        from '../../providers/medicine';
import { DateFormat }      from '../../pipes/date_format';
import { MedicineService } from '../../providers/medicine.service'

@Component({
  templateUrl: 'build/pages/information/information.html',
  pipes: [DateFormat]
})

export class InformationPage {
  public medicine: Medicine;

  constructor(private navCtrl: NavController, public medicineService: MedicineService) {
  }

  public initDB() {
    this.medicineService.initDB();

    this.medicineService.saveMedicine(new Medicine(null, "Drug name 1", "Producer1", "Lorem ipsum dolor sit amet", "drug1.jpg", true, new Date("2016-10-09"), new Date("2016-11-15"), new Date("2016-11-15")));
    this.medicineService.saveMedicine(new Medicine(null, "Drug name 2", "Producer2", "Lorem ipsum dolor sit amet", "drug2.jpg", false, new Date("2016-09-18"), new Date("2016-11-11"), new Date("2016-12-18")));
    this.medicineService.saveMedicine(new Medicine(null, "Drug name 3", "Producer3", "Lorem ipsum dolor sit amet", "drug3.jpg", true, new Date("2016-08-11"), new Date("2016-11-20"), new Date("2016-11-18")));
    this.medicineService.saveMedicine(new Medicine(null, "Drug name 4", "Producer4", "Lorem ipsum dolor sit amet", "drug4.jpg", true, new Date("2016-07-17"), new Date("2016-11-15"), new Date("2017-11-09")));
  }
}
