import { UserProfil } from "../user-profils/user-profil.model";

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public address: string,
    public deleted: boolean,
    public firstPhoneNumber: string,
    public secondPhoneNumber?: string,
    public cni?: string,
    public profil?: UserProfil,
    public avatar?: any
  ) {  }
}
