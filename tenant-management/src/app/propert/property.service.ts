import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(public db:AngularFireDatabase,private authService:AuthService) { }

  // createUser(value, avatar){
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }

  
  create(property)
  {
    var owner=this.authService.authUser;
    // console.log(owner);
    return this.db.list('owners/'+owner.uid+'/property' ).push({
      owner_email:owner.email,
      propertyName:property.value.pname,
      location:property.value.location,
      rent:property.value.rent,
      leasetime:property.value.leasetime
    });
  }

  
  getAll()
  {
    var owner=this.authService.authUser;
    // console.log(this.db.list('/property'));
    // return this.db.list('/property');
    return this.db.list('owners/'+owner.uid+'/property');
  }

  update(productId, product)
  {
    return this.db.object('owners/'+productId).update(product);
  }

  delete(productId)
  {
    return this.db.object('/products/'+productId).remove();
  }


  get(propertyId)
  {
    return this.db.object('/property/'+propertyId);
  }

}
