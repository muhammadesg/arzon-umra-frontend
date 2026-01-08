import { StaticImageData } from "next/image";

export interface CardInterface {
    id: number;
    brand_logo1: StaticImageData;
    brand_logo2: StaticImageData;
    image: StaticImageData;
    title: string;
    locals: string[];
    date_start: string;
    date_end: string;
    deadline: number;
    count: number;
    price: number;
}

export interface SendContact {
    fullname: string;
    phone: number;
}

export interface SiteSettingsInterface {
    id: number;
    title: string;
    logo: string;
    brand_name: string;
    description: string;
    keywords: string;
    author: string;
    address: string;
    email: string;
    phone: string;
    facebook_link: string;
    instagram_link: string;
    youtube_link: string;
    telegram_link: string;
    created_at: string | null;
    updated_at: string;
}
  