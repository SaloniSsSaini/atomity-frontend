import { useQuery } from "@tanstack/react-query"

export const useApiData = () => {

 return useQuery({

  queryKey:["metrics"],

  queryFn: async () => {

   const res = await fetch("https://dummyjson.com/products")

   if(!res.ok){
    throw new Error("API error")
   }

   return res.json()

  },

  staleTime:1000*60*5

 })

}