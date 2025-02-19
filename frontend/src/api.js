import axios from "axios";

export const predictSentiment = async (text) => {
  const response = await axios.post("http://localhost:8000/predict/", { text });
  return response.data;
};
