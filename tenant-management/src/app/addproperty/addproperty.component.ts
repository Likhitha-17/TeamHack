import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PropertyService } from "../property/property.service";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Owner } from "../models/owner";

@Component({
  selector: "app-addproperty",
  templateUrl: "./addproperty.component.html",
  styleUrls: ["./addproperty.component.css"],
})
export class AddpropertyComponent implements OnInit {
  constructor(
    public property: PropertyService,
    public authService: AuthService
  ) {}

  owners: string[] = [];
  owner: Owner;

  ngOnInit() {
    this.getCustomersList();
  }
  submit(formData: any) {
    this.owner = new Owner();
    this.owner.email = this.authService.authEmail;
    this.property.createOwner(this.owner);
  }
  async getCustomersList() {
    await this.property
      .getOwnersList()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((customers) => {
        console.log(customers);
        this.owners.unshift(customers["email"]);
      });
  }

  deleteCustomers() {
    this.property.deleteAll().catch((err) => console.log(err));
  }
}
