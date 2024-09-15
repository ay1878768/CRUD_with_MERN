import React from "react";
import { useState,useEffect } from "react";
import Card from "./Card";
import axios from 'axios'
const Cardcontainer = () => {
    const [animal,setAnimal]=useState([]);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData =async () => {
        const response=await fetch("http://localhost:8080/animal")
        const data=await response.json()
        console.log(data.allAnimal);
        setAnimal(data.allAnimal);
    }
    return (
        <div className="flex flex-wrap justify-center items-center">
            {animal.map((item) => (
                <Card key={item._id} item={item}/>
            ))}
        </div>
    );
};

export default Cardcontainer;
