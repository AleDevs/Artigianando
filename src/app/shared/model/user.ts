export class User {
  uid?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  preferences?: UserPreference;

  constructor(json?: any) {
    this.setData(json);
  }

  setData(json?: any) {
    if (json) {
      this.uid = json["uid"];
      this.email = json["email"];
      this.firstName = json["firstName"];
      this.lastName = json["lastName"];
      this.preferences = new UserPreference(json["preferences"]);
    }
  }

  getData(): any {
    const json: any = {};
    if (this.uid !== undefined) {
      json["uid"] = this.uid;
    }
    if (this.email !== undefined) {
      json["email"] = this.email.trim() ?? null;
    }
    if (this.firstName !== undefined) {
      json["firstName"] = this.firstName;
    }
    if (this.lastName !== undefined) {
      json["lastName"] = this.lastName;
    }
    if (this.preferences !== undefined) {
      json["preferences"] = this.preferences.getData();
    }
    return json;
  }
}

export class UserPreference {
  darkMode?: boolean;

  constructor(json?: any) {
    this.setData(json);
  }

  setData(json?: any) {
    if (json) {
      this.darkMode = json["darkMode"];
    }
  }

  getData(): any {
    let json: any = {};
    if (this.darkMode !== undefined) {
      json["darkMode"] = this.darkMode;
    }
    return json;
  }
}
