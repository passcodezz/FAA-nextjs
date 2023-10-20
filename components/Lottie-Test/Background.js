import React from "react";

import Lottie from "lottie-react";
import Infinite from "../../infinite4.json";



export const Background = () => {
    const Options ={
        loop: true,
        autoplay: true,
        animationData: Infinite
    }


return <Lottie options={Options} 
// width={350} height={350} 
/>

}

