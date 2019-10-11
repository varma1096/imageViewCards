import { Component, OnInit } from '@angular/core';
import { MedicationServiceService } from '../medication-service.service';
import {User } from '../user.model';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})

export class MedicationComponent implements OnInit {
  meds:User[];
 image:any;
 arr2: any[] = new Array();

images :any[];
  constructor(private medservice:MedicationServiceService) { }

  ngOnInit() {

    this.medservice.findAll().subscribe(data => {
            this.meds = data;
            console.log(this.meds);
            
            this.image= [this.meds[1].image]; // get from server

           /*  //this.images=this.meds.image;
             console.log("len"+this.meds.length);
            for(var i = 0; i < this.meds.length; i++)
              { 
                  console.log(this.meds[i].userid); // output: Apple Orange Banana
                  this.arr2[i]=[this.meds[i].image];
                  
              }   */
  
              

            /* var uints = new Uint8Array(bytes);
             this.base = btoa(String.fromCharCode(null, uints));
            var url = 'data:image/jpeg;base,' + this.base; */ 


            // const reader = new FileReader();
           // reader.onload = (e) => this.image = e.target.result;
           // reader.readAsDataURL(new Blob([this.meds[0].image])); 
    });
  }

}
