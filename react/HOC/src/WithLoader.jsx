import React, { useState } from "react";

const WithLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // if (loading){
    //   throw new Error("error occurred");
    // }

    return <>{loading ? <div>...loading</div> : <WrappedComponent />}</>;
  };
};

// HOC
//sjdaf sdafjskdafjsdjfjsadfjsadjfsdf sdfdsaf 


//HOC
//HOC fsdfddsfdf 
//sjdaf sdafjskdsadfjsadjfsdf sdfdsaf 
//sjdaf sdafjskdafjsdjfjsadfjsadjfsdf sdfdsaf 



export default WithLoader;
