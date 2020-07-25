import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";


export interface PeriodicElement {
  property_name:string;
  rent:string;
  location:string;
  lease_time:string;
  tenant:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {property_name: "Flat", rent: '5000', location: "Vanasthalipurem", lease_time: '3',tenant:'yes'},
  
];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",  
  styleUrls: ["./dashboard.component.css"],
})


export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  
  ngOnInit(): void {}
  displayedColumns: string[] = ['property_name', 'rent', 'location', 'lease_time','tenant'];
  dataSource = ELEMENT_DATA;
}
