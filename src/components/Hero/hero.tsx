import React from "react";
import  HERO  from "../../assets/HERO.png"
import { TILE_SIZE } from "../../settings/constantes";
import "./hero.css"
const Hero = () => {
    return(
        <div
            style = {{
                width:TILE_SIZE ,
                height: 100,
                backgroundImage: HERO,
                backgroundRepeat: "no-repeat",
                animation: "hero-animation 1s steps(4) infinite"
            }}
        />
    )
};

export default Hero