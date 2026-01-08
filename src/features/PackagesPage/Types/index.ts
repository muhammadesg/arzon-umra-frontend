export interface AviaCompany {
    id: number;
    name: string;
}
  
export interface TourType {
    id: number;
    name: string;
}

export interface TourCompany {
    id: number;
    name: string;
}

export interface OptionsInterface {
    avia_companies: AviaCompany[];
    tour_types: TourType[];
    tour_companies: TourCompany[];
    hotel_distances: string[];
}
