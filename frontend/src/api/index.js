import axios from "axios";


const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key": "a686f69508msh901132bd621ee52p11a6e3jsn524ccde25e28",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      });
    return data;
  } catch (error) {
    console.log('api error');
    console.log(error);
  }
};
