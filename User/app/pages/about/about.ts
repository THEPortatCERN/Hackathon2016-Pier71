import {Component}     from '@angular/core';
import {NavController} from 'ionic-angular';

import { Medicine }           from '../../providers/medicine';
import { Transaction }        from '../../providers/transaction';
import { PublicKey }          from '../../providers/public_key';
import { DateFormat }         from '../../pipes/date_format';
import { MedicineService }    from '../../providers/medicine.service';
import { TransactionService } from '../../providers/transaction.service';
import { PublicKeyService }   from '../../providers/public_key.service';

@Component({
  templateUrl: 'build/pages/about/about.html',
  pipes: [DateFormat]
})

export class AboutPage {

  constructor(private navCtrl: NavController, private medicineService: MedicineService, private transactionService: TransactionService, private publicKeyService: PublicKeyService) {
  }

  public initDB() {
    this.medicineService.initDB();
    this.transactionService.initDB();
    this.publicKeyService.initDB();

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

  this.publicKeyService.savePublicKey(
    new PublicKey(
      null,
      "GAVI Alliance",
      "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v1\n\nmQGiBFgBE0MRBADa0/eu66dzh1KytMfjclGS8fXdAXBeZu+59sikAIi3JDa9jfzo\nq3vMTTn7M+m2HNMfcr8ogY0N8xpQiQyQocGYCLihEwhXX21jv9N+gk2ZqMvYYOe8\nFWGiDkNN0qJW042S6nmbk25/UhMkTXkndRupcfRDmS04biogUBTI0rcPzwCgqpOS\nE23aDjVDE74YxeIC0ukhTy8D/13BnNWNoLuPIasnAryMy+lmCJrLX2h/yib/93qB\ndi4cLw8REya4JlPK2VQ6/G6R9rQskQyMAf20WZ0/YTzTaqXKQMXIjJXDJOW54PT3\n/Kl5onQleG+Sc2WldRZcOFpiPCt47QgHep9tCTndTFMZpPhdqSW62gVQQwiGEacP\ne9/TBACDzo7E33vOoHsdR9YHgDgsWZUcCN30GI4xS40zJgfDLjqPKrApKTJt6CO0\nGw80R/4QHGSCrcJDcmnr0o4VAajVIgDIRVqqhShQ9oAWkF3dikIN9M6HhMy08laB\n3TqYky6NZIiaAQA0lizChlJUOCgOInRvhzsHOunTJ/Nw3MuM2rQpQ2hhaW4gU2Fm\nZXR5IEludmVzdGlnYXRvcnMgPGluZm9AY3NpLm9yZz6IYgQTEQIAIgUCWAETQwIb\nAwYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQJhD70SvfYrb4fQCdH3yXmhOh\nPEuVfiw8vTREd5vTNpQAniLpPPl2B+MACgCtGt24LGhEMl0+mI0EWANPOQEEALRv\nYYTq2MHRtAHX4AdM0JgE40p/p51qBuGXTP86QcU9Lgjah0G9hTh/MA5JhlGWX51h\nFoz/dAGqifJsa+c+zdFo6qKCLLpTvmLmuG4adaUPf9LTLW94QceZ52Ws4jnTQ0KF\n+RS9P05keZeW/uqiKhe9j4dr2P7XqfXOQqlKGESdABEBAAG0IkdBVkkgQWxsaWFu\nY2UgPGdhdmlAY2hhaW5zYWZlLm9yZz6IvgQTAQIAKAUCWANPOQIbAwUJB4TOAAYL\nCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQeMgmYttY5vJaRAQAnJgxN2mNJue9\nlNIUPeA8/BRMOhTpOSnoO2MqiDid4QdFG+6dr+GL/kIP3ZX7HoT+Spj9wmT86Atm\no8ekqoeq8w+5LyO7SR8hNbP/ze5RnHLYJS4b9Lb2jTZooMUXz/5mH2psp2FH5KF+\nA8dMf/j7tQ7+Sy9xy6mZIVcOKUxZZM8=\n=v90V\n-----END PGP PUBLIC KEY BLOCK-----",
      new Date("2020-10-15")
    )
  );

  }

}
