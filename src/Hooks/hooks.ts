import axios from "axios";
import { useEffect, useState } from "react";

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