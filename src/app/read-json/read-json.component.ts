import { Component, OnInit } from '@angular/core';
import ROTestDB_snippet from '../../assets/ROTestDB_snippet.json'



@Component({
  selector: 'read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJSONComponent implements OnInit {
  Homes = ROTestDB_snippet;
  num_of_houses: number;


  constructor() { 
    this.num_of_houses = ROTestDB_snippet.length;
    console.log(this.num_of_houses);

    let address: string = ROTestDB_snippet[1].location.address.streetAddress;
  //  let address: string = ROTestDB_snippet[1].propertyDetails.marketStatus.price.value.$numberInt;
    console.log(address);



  }

  




  ngOnInit() {
  }

}
