import React, { useState } from "react";
import Button from "./Button";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
const Card = ({ item }) => {
    let {id}=useParams();
    const handleDelete  =  async (id) => {
        try{
            await axios.delete(`http://localhost:8080/animal/`+id)
            window.location.reload();
        }
        catch(err) {
            console.log(err);
        } 
    }
    return (
        <div className="border m-5 p-5 bg-slate-500 rounded-lg w-96 shadow-xl">
            <p className="font-bold">{item.name}</p>
            <p>{item.diet}</p>
            <p>{item.habitat}</p>
            <p>{item.lifespan}</p>
            <p>{item.facts}</p>
            <div className="flex gap-5">
                <Link onClick={()=>handleDelete(item._id)}><Button name="Delete"/></Link>
                <Link to={`/update/${item._id}`}><Button name="Update" /></Link>
               
            </div>
        </div>
    );
};

export default Card;
