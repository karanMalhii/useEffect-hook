import React from 'react'
import { useEffect,useState } from 'react'

export default function test(apiURL) {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);

    async function getdata(url) {
        setloading(true);
        try {           
            let Data = await fetch(url)
            if (Data.ok) {
                
                let jsonData = await Data.json();
                setdata(jsonData)
    
            } else {
                seterror("there is some problem in api responce");
            }
        }catch(error){
            seterror(error)
        }
        setloading(false);
            
       
    
}
        useEffect(function () {
            getdata(apiURL)
        }, [apiURL])
    
     return {data,error,loading }

}
