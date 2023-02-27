export class ToDo {
  id?: string;
  description?: string;
  done?: boolean;

  constructor(json?: any) {
    this.setData(json);
  }

  setData(json?: any) {
    if (json) {
      this.id = json["id"];
      this.description = json["description"];
    }
  }

  getData(): any {
    const json: any = {};
    if (this.id !== undefined) {
      json["id"] = this.id;
    }
    if (this.description !== undefined) {
      json["description"] = this.description;
    }
    if (this.done !== undefined) {
      json["done"] = this.done;
    }
    return json;
  }
}