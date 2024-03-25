import axios from "axios";

export default async function grammar(text) {
  const options = {
    method: "POST",
    url: "https://textgears-textgears-v1.p.rapidapi.com/grammar",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "44939bee00msh36bf9375a919a7ap149838jsn43964a50e8ac",
      "X-RapidAPI-Host": "textgears-textgears-v1.p.rapidapi.com",
    },
    data: {
      text,
    },
  };

  try {
    const {data} = await axios.request(options);
    return data
  } catch (error) {
    console.error(error);
  }
}
