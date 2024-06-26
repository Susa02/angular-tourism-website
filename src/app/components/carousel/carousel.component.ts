import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  imageURL="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  images = [
    { imageurl: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { imageurl: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_%28197%29.jpg/1200px-Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_%28197%29.jpg" }
  ];
  
}
