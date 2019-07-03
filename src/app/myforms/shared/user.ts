export class User {
  private _id: string;
  private _username: string;
  private _password: string;

  constructor() {
    this._id = this.uniqueId();
    this._username = '';
    this._password = '';
  }

  /*****
   * Setters y Getters de la clase
   */

  public setId(id : string){
    this._id = id;
  }

  public setUsername(name: string) {
    this._username = name;
  }

  public setPassword(pwd: string) {
    this._password = pwd;
  }

  public getId() {
    return this._id;
  }

  public getUsername() {
    return this._username;
  }

  public getPassword() {
    return this._password;
  }

  private uniqueId() {
    const thisDate: number = Date.now();
    const aleatro = Math.random();
    let unique: string = Math.pow(thisDate,aleatro).toString();
    unique = unique.toString().replace('.', thisDate.toString());
    return unique;
  }

}
