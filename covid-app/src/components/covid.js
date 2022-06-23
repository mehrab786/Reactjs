import React, { useEffect } from "react";
const Covid = () => {
   const getCovidData = async()=>{
      const res = fetch('https://api.covid19india.org/data.json');

   }
   useEffect(() =>{
      getCovidData();
   }, []);


  return(
    <>
     <h1>LIVE</h1>
     <h2>Covid-19 CRONAVIRUS TRACKER</h2>

    </>
  )
}

export default Covid