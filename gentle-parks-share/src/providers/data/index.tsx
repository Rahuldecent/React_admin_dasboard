import { GraphQLClient } from "@refinedev/nestjs-query";

export const API_URL =  'https://api.crng.refine.dev';
export const client = new GraphQLClient(API_URL,{
    fetch:(url:String, options:RequestInit) => {
      try {
        return fetchWrapper(url, options);
      } catch (error) {
        return Promise.reject(error as Error);
      }
    }
})