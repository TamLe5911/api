
import * as jose from "jose";
import axios from "axios";

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
export const fetchCompany = async () => {
    let utf8Encode = new TextEncoder();
    const secretKey = utf8Encode.encode("your-256-bit-secret");   
    const jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6Ijc4NjIzZTc3LTVjNDItNDYxNS1hNjQwLTU4YTg4ZDBkMjA4MCJ9.eyJpYXQiOiIxNjYxNzY2OTg4IiwibGFuZ3VhZ2UiOiJlbiJ9.9EeE0b01OV3vEq_2UuOm6kFLNCdZPcUCzxdhk5PtPoKsjq9jUJIJWLJemVXDn26sfGvMHrUxpJLlh2zOLu45Uw";
    const req = await axios.post("https://apitest.oneibc.com/frontend/v3/services/1/products", jwt) 
    const data = await req.data;
    const companys = jose.decodeJwt(data);
    
    return companys ;

  };