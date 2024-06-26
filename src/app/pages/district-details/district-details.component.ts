import { Component } from '@angular/core';
import { DistrictCardsComponent } from "../../components/district-cards/district-cards.component";



@Component({
    selector: 'app-district-details',
    standalone: true,
    templateUrl: './district-details.component.html',
    styleUrl: './district-details.component.scss',
    imports: [DistrictCardsComponent] 
})
export class DistrictDetailsComponent {

}
