export interface BrandsInterface {
  id: number;
  image: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface SlidersInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  company_name: string;
  company_logo: string;
}

export interface CommentsInterface {
  id: number;
  image: string;
  name: string;
  comment: string;
  created_at: string;
  updated_at: string;
}
export interface AboutsInterface {
  id: number;
  image: string;
  name: string;
  info: string;
  goal_info: string;
  advantages_info: string;
  story_info: string;
  brand: number;
  hotel: number;
  customer: number;
  follower: number;
  created_at: string;
  updated_at: string;
}
