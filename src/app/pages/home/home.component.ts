import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";

import { DistrictCardsComponent } from "../../components/district-cards/district-cards.component";
import { CardComponent } from '../../components/card/card.component';
import { ErrorDirective } from '../../Directives/error.directive';
import { District } from '../../modals/districts.interface';
import { Specialty } from '../../modals/specialities.interface';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CarouselComponent, CardComponent, DistrictCardsComponent,ErrorDirective]
})
export class HomeComponent implements OnInit {
  districts: District[] = [];
  specialities: Specialty[]=[];

  constructor() {}

  ngOnInit(): void {
    this.fetchSpecialities();
  }

  async fetchSpecialities() {
    try {
      const response = await fetch('http://localhost:3000/specialities');
      const data = await response.json();
      this.specialities = data;
    } catch (error) {
      console.error('Error fetching specialities:', error);
    }
  }
  
  imageURL='https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  first = { title:"God's Own Country: The land of Equisite Wonders",
    description:"Our lush green landscapes, serene backwaters, and vibrant culture offer an unparalleled experience.Enjoy the beauty of our picturesque beaches, exotic wildlife, and traditional Ayurvedic treatments. Dive into our rich history, diverse festivals, and mouth-watering cuisine that will leave you enchanted."
    }
}
