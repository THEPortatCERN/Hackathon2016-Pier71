export class Transaction {
  public id: number;
  public medicine_id: number;
  public date: Date;
  public action: String;
  public gps: string;
  public entity_name: string;
  public comment: string;
  public genuine: boolean;

  constructor(id: number, medicine_id: number, date: Date, action: string,
    gps: string, entity_name: string, comment: string, genuine: boolean) {
      this.id = id;
      this.medicine_id = medicine_id;
      this.date = date;
      this.action = action;
      this.gps = gps;
      this.entity_name = entity_name;
      this.comment = comment;
      this.genuine = genuine;
  }

  public getStatus() {
    if (!this.genuine)
      return "counterfeit";
    else
      return "genuine";
  }
}
