import {useState} from "react";

type ParticlesProps ={
    emojis: string[];
    count:number;
    direction:"fall"|"rise"|"float";
};

type Particle={
    id: number;
    emoji: string;
    left:number; //position horizontale en %
    delay:number;// attente avant de demarer en sec
    duration:number;// duree du passage
    size:number;//taille
}

function createParticles(emojis:string[],count:number):Particle[]{
    return 
}