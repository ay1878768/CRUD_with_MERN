import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Newform = () => {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [habitat, setHabitat] = useState("");
    const [lifespan, setLifespan] = useState("");
    const [diet, setDiet] = useState("");
    const [facts, setFacts] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/animal', {
            name,habitat,lifespan,diet,facts
        })
        navigate("/")
        }
        catch(err) {
            console.log(err);
        }
        
        // console.log(name);
        // setName("")
    }
    return (
        <div className="bg-blue-400 w-[35rem] m-4 p-3 rounded-lg mx-auto">
            <h1 className="h-40 rounded-lg bg-black text-3xl font-bold text-white grid place-content-center w-full">
                Submit New Data
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">Name:</label>
                    <input
                        className="py-2 rounded-lg px-3 border border-black"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">Habitat:</label>
                    <input className="py-2 rounded-lg px-3 border border-black" type="text"
                    onChange={(e) => setHabitat(e.target.value)}
                     />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">lifespan:</label>
                    <input className="py-2 rounded-lg px-3 border border-black" type="text"
                    onChange={(e) => setLifespan(e.target.value)} />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">diet:</label>
                    <input className="py-2 rounded-lg px-3 border border-black" type="text" 
                    onChange={(e) => setDiet(e.target.value)}
                    />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">facts:</label>
                    <textarea className="py-2 rounded-lg px-3 border border-black" type="text" 
                    onChange={(e) => setFacts(e.target.value)}
                    />
                </div>
                <button className="border bg-orange-500 my-3 px-3 rounded-lg font-bold py-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Newform;
