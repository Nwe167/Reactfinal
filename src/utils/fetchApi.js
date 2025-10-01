import axios from "axios";

const fetchApi = async () => {
  const respone = await axios("https://clothes-json.onrender.com/products");
  return respone.data;
};

export default fetchApi;
