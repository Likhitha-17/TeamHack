import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { PropertyService } from '../propert/property.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';


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

// interface details{
//   property_name:string;
//   rent:string;
//   location:string;
//   lease_time:string;
//   tenant:string;
// }


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",  
  styleUrls: ["./dashboard.component.css"],
})



export class DashboardComponent implements OnInit {
  
  // Const details$:details[];
  details:any[]=[];
  dataSource:any;

  constructor(public authService: AuthService,public propertyService:PropertyService,public db:AngularFireDatabase,public route:ActivatedRoute) {
    // this.details$ = this.propertyService.getAll().snapshotChanges();
    // console.log(this.details$);
  }
  ngOnInit(){
    this.propertyService.getAll().snapshotChanges().subscribe(res=>{
      console.log(res);
      res.forEach(data=>{
        this.details.push(data);
      });

      
      // console.log(res[0].payload.val()["leasetime"]);
    });
  }

  editTenant(){
    var owner=this.authService.authUser;
    var propertyId=owner.uid;

  }

  removeTenant(){

  }
  
  
    

  
  
  
  
  
}


// git checkout -b branchname
// git status---for checking
// git add .
// git commit -m "commit msg"
// git push origin master
// git push --set-upstream origin branchname
