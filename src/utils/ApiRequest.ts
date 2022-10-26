import axios from "axios";
import * as jose from "jose";
const API_URL = process.env.apiEndpoint as string;
const body = process.env.cmsApiKey as string;
const request = axios.create({
  baseURL: API_URL,
});

export const get = async (path: string, options = {}) => {
  const response = await request.post(path, body, options);
  const data = jose.decodeJwt(response.data);
  return data;
};
export const post = async (path: string, options = {}) => {
  const response = await request.post(path, body, options);
  const data = jose.decodeJwt(response.data);
  // console.log(data)
  return data;
};

export default request;
