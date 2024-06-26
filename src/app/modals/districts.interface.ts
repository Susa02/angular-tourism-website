export interface District {
    id: number;
    title: string;
    description: string;
    image_url: string;
    tourist_places: TouristPlace[];
  }
  
  export interface TouristPlace {
    name: string;
    description: string;
    image_url: string;
  }
  