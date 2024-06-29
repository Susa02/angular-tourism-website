import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { District } from '../../modals/districts.interface';


@Component({
    selector: 'app-districts',
    standalone: true,
    templateUrl: './districts.component.html',
    styleUrls: ['./districts.component.scss'],
    imports: [CommonModule]
})

export class DistrictsComponent implements OnInit {
  districtId: number = 0;
  districts: District[] = [];
  selectedDistrict: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.districtId = +params['id'];
      this.fetchDistricts(this.districtId);
    });
  }

  async fetchDistricts(id: number) {
    console.log(id);
    
    await fetch(`https://angular-tourism-website.vercel.app/districts`)
      .then(response => response.json())
      .then(data => {
        this.districts = data;

        
        this.selectedDistrict = this.districts.find(district => district.id == id);
        console.log(this.selectedDistrict);
      })
      .catch(error => {
        console.error('Error fetching districts:', error);
      });
  }
  }


