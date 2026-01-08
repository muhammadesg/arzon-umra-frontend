/** @format */

import { SendContact } from "@/components/Types";
import { DetailSendContact } from "@/features/Economic/Types";
import Axios from "axios";

export const BASE_URL = "https://laravel-production-de2c.up.railway.app";

export const BASE_URL_IMAGES = "https://laravel-production-de2c.up.railway.app/storage/";

export const axiosInstance = Axios.create({
  baseURL: BASE_URL + "/api/",
  headers: {
    Accept: "application/json,text/*;q=0.99",
    "Content-Type": "application/json",
  },
});

export const API = {
  // HomePage
  getHomeBrands: () =>
    axiosInstance.get("brands").then((res) => res.data),
  
  getHomeSliders: () =>
    axiosInstance.get("sliders").then((res) => res.data),

  getHomeComments: () =>
    axiosInstance.get("comments").then((res) => res.data),

  getHomeCards: () =>
    axiosInstance.get("tourCards").then((res) => res.data),

  postSendContact: (data: SendContact) =>
    axiosInstance.post("sendcontacts", data).then((res) => res.data),

  // VideosPage
  getVideos: () =>
    axiosInstance.get("videos").then((res) => res.data),

  // abouts
  getAbouts: () =>
    axiosInstance.get("abouts").then((res) => res.data),

  // economic detail
  getEconomicDetail: (id: number) =>
    axiosInstance.get(`packages/${id}`).then((res) => res.data),

  postSendDetailContact: (data: DetailSendContact) =>
    axiosInstance.post("orders", data).then((res) => res.data),

  // packages
  getPackages: () =>
    axiosInstance.get("filters").then((res) => res.data),

  getToursSearch: (queryString?: string) =>
    axiosInstance.get(`search-tours?${queryString}`).then((res) => res.data),

  // footer
  getSettings: () =>
    axiosInstance.get("settings").then((res) => res.data),
};
