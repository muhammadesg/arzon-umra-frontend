export interface Advantage {
    icon_name: string;
    name: string;
}
  
export interface TravelPackageInterface {
    id: number;
    company: string;
    avia_id: string;
    photo: string;
    ticket_type: string;
    price: number;
    name: string;
    company_photo: string;
    avia_photo:  string;
    total_duration: number;
    departure_time: string;
    arrival_time: string;
    visa_type: string;
    origin_city: string;
    stopover_cities: string;
    destination_city: string;
    food: string;
    ambulance: string;
    taxi_service: string;
    gift: string;
    package_info: string;
    hotel_name: string;
    hotel_distance: number;
    hotel_star_count: number;
    hotel_info: string;
    hotel_image1: string;
    hotel_image2: string;
    hotel_image3: string;
    advantages: Advantage[];
    count: number;
}

export interface DetailSendContact {
    package_id: number | undefined;
    name: string;
    phone:  string;
    count: number;
}