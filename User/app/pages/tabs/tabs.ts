import { Component }       from '@angular/core';

import { AboutPage }       from '../about/about';
import { ScanPage }        from '../scan/scan';
import { HistoryPage }     from '../history/history';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private scan: any;
  private history: any;
  private about: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.scan = ScanPage;
    this.history = HistoryPage;
    this.about = AboutPage;
  }
}
