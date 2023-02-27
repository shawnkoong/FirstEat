import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getData = async (sw, ne) => {
  try {
    if (sw) {
      const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        });
      return data;
    };
  } catch (error) {
    console.log(error);
  }
};
