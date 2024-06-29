import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { District } from '../../modals/districts.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  districts: District[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchDistricts();
  }

  async fetchDistricts() {
    try {
      const response = await fetch('http://localhost:3000/districts');
      this.districts = await response.json();
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  }

}
