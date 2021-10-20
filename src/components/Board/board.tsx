import React from "react";
import  Setup  from "../../assets/Setup.gif"
import { GAME_SIZE } from "../../settings/constantes";
import  Hero from "../Hero/hero" 

const Board = () =>{
    return (
        <div>
            <Hero />
            <img src= { Setup } alt="" width = {GAME_SIZE} height = {GAME_SIZE}/>
        </div>  
    );
}

export default Board;