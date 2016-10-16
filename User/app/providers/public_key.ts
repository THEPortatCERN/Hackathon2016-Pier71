export class PublicKey {

  public id: number;
  public manifacturer: string;
  public key: string;
  public expiration: Date;

  constructor(id: number, manifacturer: string, key: string, expiration: Date) {
    this.id = id;
    this.manifacturer = manifacturer;
    this.key = key;
    this.expiration = expiration;
  }

}
