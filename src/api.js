// GeoDB Cities
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// open weather api
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

