import axios from "axios";

const langaugeDetetion = async (param) => {
  const options = {
    url: "https://textgears-textgears-v1.p.rapidapi.com/detect",
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "44939bee00msh36bf9375a919a7ap149838jsn43964a50e8ac",
      "X-RapidAPI-Host": "textgears-textgears-v1.p.rapidapi.com",
    },
    data: {
      text: param,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export default langaugeDetetion;
