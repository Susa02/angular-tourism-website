import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { District } from '../../modals/districts.interface';

@Component({
  selector: 'app-district-cards',
  standalone: true,
  imports: [FormsModule,FilterPipePipe],
  templateUrl: './district-cards.component.html',
  styleUrl: './district-cards.component.scss'
})
export class DistrictCardsComponent implements OnInit {
  districts: District[] = [];
  toFilter: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchDistricts();
  }
  
  fetchDistricts() {
    fetch('http://localhost:3000/districts')
      .then(response => response.json())
      .then(data => {
        this.districts = data;
      })
      .catch(error => {
        console.error('Error fetching districts:', error);
      });
  }

  viewDistrictDetails(id: number){
    this.router.navigate(['/districts', id]);
  }
}
