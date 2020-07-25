import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Owner } from "../models/owner";

@Injectable({
  providedIn: "root",
})
export class PropertyService {
  private dbPath = "/owners";

  ownersRef: AngularFireList<Owner> = null;

  constructor(private db: AngularFireDatabase) {
    this.ownersRef = db.list(this.dbPath);
  }

  createOwner(Owner: Owner): void {
    this.ownersRef.push(Owner);
  }

  updateOwner(key: string, value: any): Promise<void> {
    return this.ownersRef.update(key, value);
  }

  deleteOwner(key: string): Promise<void> {
    return this.ownersRef.remove(key);
  }

  getOwnersList(): AngularFireList<Owner> {
    return this.ownersRef;
  }

  deleteAll(): Promise<void> {
    return this.ownersRef.remove();
  }
}
