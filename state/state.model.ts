export class State {
    id: number;
    name: string;
    email: string;
    password: string;
    mobileno: string;
    address: string;
    cityid: number;
    pincode: string;
  
    constructor(satate) {
        this.id = satate.id || 0;
        this.name = satate.name || "";
        this.email = satate.email || "";
        this.password = satate.password || "";
        this.mobileno = satate.mobileno || "";
        this.address = satate.address || "";
        this.cityid = satate.cityid || 0;
        this.pincode = satate.pincode || "";
    }
  }
  