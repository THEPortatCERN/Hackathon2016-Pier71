/**
 * Store agregated information about the medicine
 */
export class Medicine {
  public id: number;
  public title: string;
  public producer: string;
  public description: string;
  public img: string;
  public genuine: boolean;
  public date_produced: Date;
  public date_expire: Date;
  public date_scanned: Date;

  constructor(id: number, title: string, producer: string, description: string, img: string,
    genuine: boolean, date_produced: Date, date_expire: Date,
    date_scanned: Date) {
    this.id = id;
    this.title = title;
    this.producer = producer;
    this.description = description;
    this.img = img;
    this.genuine = genuine;
    this.date_produced = date_produced;
    this.date_expire = date_expire;
    this.date_scanned = date_scanned;
  }

  /**
   * Used to tget the color of the card, red if counterfeit
   */
  public getStatusColor() {
    if (this.genuine && (this.date_expire >= this.date_scanned))
      return "#FFF";

    else
      return "#ffa899";
  }

  public getStatus() {
    if (!this.genuine)
      return "counterfeit";
    else if (this.date_expire < this.date_scanned)
      return "expired";
    else
      return "genuine";
  }
}
