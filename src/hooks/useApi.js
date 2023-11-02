import { useState, useEffect } from "react";

export default function useApi(apiURL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData(url) {
    setLoading(true);
    try{
        let responseData = await fetch(url);
        if(responseData.ok){
            let jsonData = await responseData.json();
            setData(jsonData);
        }else{
            setError("Something went wrong!")
        }
    }catch(error){
        setError(error)

    }
    setLoading(false);
  }

  useEffect(function () {
    getData(apiURL);
  }, [apiURL]);

  return { data, loading, error };
}
