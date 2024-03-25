import axios from "axios";

const textSummarization = async (params) => {
  const options = {
    method: "POST",
    url: "https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "44939bee00msh36bf9375a919a7ap149838jsn43964a50e8ac",
      "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
    },
    data: {
      language: "english",
      summary_percent: params.range,
      text: params.text,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data
    // console.log(data);
  } catch (error) {
    console.log(error);
  }

  //   console.log(apiParams);
};

export default textSummarization;
