import axios from "axios";
import { useEffect, useState } from "react";
import { Key } from "w3c-keys" 

export function useApi<S>(api:string ) {
    const [data, setData] = useState<S>();
    useEffect(() => {
        const options = {
          headers: {
            "accept": "application/json"
          }
        }
        async function getData() {
          const response = await axios.get(api,options);
          setData(response.data);
        }
        getData();
      }, [api]);
      return data;
}

export function useKey(key:Key, func:()=>void) {
      useEffect(()=>{
        const onKeyPress = (e:KeyboardEvent): void =>{
          if(e.key === key){
            func()
          }
        }
        window.addEventListener("keypress", onKeyPress)
        return () => window.removeEventListener("keypress", onKeyPress)
      }, [func, key])
}