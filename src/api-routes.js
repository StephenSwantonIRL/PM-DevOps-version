import { userApi } from "../api/user-api.js"
import { placeApi } from "../api/place-api.js";
import { categoryApi } from "../api/category-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "POST", path: "/api/placemark", config: placeApi.create },
  { method: "DELETE", path: "/api/placemark", config: placeApi.deleteAll },
  { method: "GET", path: "/api/placemark", config: placeApi.find },
  { method: "GET", path: "/api/placemark/{id}", config: placeApi.findOne },
  { method: "DELETE", path: "/api/placemark/{id}", config: placeApi.deleteOne },

  { method: "POST", path: "/api/placemark/category", config: categoryApi.create },
  { method: "DELETE", path: "/api/placemark/category", config: categoryApi.deleteAll },
  { method: "GET", path: "/api/placemark/category", config: categoryApi.find },
  { method: "GET", path: "/api/placemark/category/{id}", config: categoryApi.findOne },
  { method: "DELETE", path: "/api/placemark/category/{id}", config: categoryApi.deleteOne },
  { method: "POST", path: "/api/placemark/category/{categoryId}/places", config: categoryApi.addPlace },
  { method: "DELETE", path: "/api/placemark/category/{categoryId}/places/{placeId}", config: categoryApi.removePlace },
  { method: "GET", path: "/api/placemark/category/{id}/places", config: categoryApi.getPlaces },

];