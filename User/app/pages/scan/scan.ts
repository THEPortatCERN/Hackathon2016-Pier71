import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
var openpgp = require('openpgp');

@Component({
  templateUrl: 'build/pages/scan/scan.html'
})
export class ScanPage {

  constructor(private navCtrl: NavController) {
  }

  public verify() {
      console.log("verifying");
    var public_key = "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v1\n\nmQGiBFgBE0MRBADa0/eu66dzh1KytMfjclGS8fXdAXBeZu+59sikAIi3JDa9jfzo\nq3vMTTn7M+m2HNMfcr8ogY0N8xpQiQyQocGYCLihEwhXX21jv9N+gk2ZqMvYYOe8\nFWGiDkNN0qJW042S6nmbk25/UhMkTXkndRupcfRDmS04biogUBTI0rcPzwCgqpOS\nE23aDjVDE74YxeIC0ukhTy8D/13BnNWNoLuPIasnAryMy+lmCJrLX2h/yib/93qB\ndi4cLw8REya4JlPK2VQ6/G6R9rQskQyMAf20WZ0/YTzTaqXKQMXIjJXDJOW54PT3\n/Kl5onQleG+Sc2WldRZcOFpiPCt47QgHep9tCTndTFMZpPhdqSW62gVQQwiGEacP\ne9/TBACDzo7E33vOoHsdR9YHgDgsWZUcCN30GI4xS40zJgfDLjqPKrApKTJt6CO0\nGw80R/4QHGSCrcJDcmnr0o4VAajVIgDIRVqqhShQ9oAWkF3dikIN9M6HhMy08laB\n3TqYky6NZIiaAQA0lizChlJUOCgOInRvhzsHOunTJ/Nw3MuM2rQpQ2hhaW4gU2Fm\nZXR5IEludmVzdGlnYXRvcnMgPGluZm9AY3NpLm9yZz6IYgQTEQIAIgUCWAETQwIb\nAwYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQJhD70SvfYrb4fQCdH3yXmhOh\nPEuVfiw8vTREd5vTNpQAniLpPPl2B+MACgCtGt24LGhEMl0+mI0EWANPOQEEALRv\nYYTq2MHRtAHX4AdM0JgE40p/p51qBuGXTP86QcU9Lgjah0G9hTh/MA5JhlGWX51h\nFoz/dAGqifJsa+c+zdFo6qKCLLpTvmLmuG4adaUPf9LTLW94QceZ52Ws4jnTQ0KF\n+RS9P05keZeW/uqiKhe9j4dr2P7XqfXOQqlKGESdABEBAAG0IkdBVkkgQWxsaWFu\nY2UgPGdhdmlAY2hhaW5zYWZlLm9yZz6IvgQTAQIAKAUCWANPOQIbAwUJB4TOAAYL\nCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQeMgmYttY5vJaRAQAnJgxN2mNJue9\nlNIUPeA8/BRMOhTpOSnoO2MqiDid4QdFG+6dr+GL/kIP3ZX7HoT+Spj9wmT86Atm\no8ekqoeq8w+5LyO7SR8hNbP/ze5RnHLYJS4b9Lb2jTZooMUXz/5mH2psp2FH5KF+\nA8dMf/j7tQ7+Sy9xy6mZIVcOKUxZZM8=\n=v90V\n-----END PGP PUBLIC KEY BLOCK-----";
    var public_keys = openpgp.key.readArmored(public_key).keys;
    var qr_code = "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\nGAVI Alliance                   Flu                                                             20161016120000  28975293740928509283                                                                                                            \n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1\n\niEYEARECAAYFAlgDUJgACgkQJhD70SvfYrYRfQCgppjg25CGGb6C3zQqMJ6tPR1F\nupkAn0VdAG8tF5QU670mGv+n6AMlD6X0\n=wA3Z\n-----END PGP SIGNATURE-----";
    var message_signed = openpgp.cleartext.readArmored(qr_code);
    openpgp.verify({message: message_signed, publicKeys: public_keys}).then(function(e){
      console.log(e);
    });
  }

}
