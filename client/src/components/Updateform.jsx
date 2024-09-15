import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Updateform = () => {
    const [name, setName] = useState();
    const [habitat, setHabitat] = useState();
    const [lifespan, setLifespan] = useState();
    const [diet, setDiet] = useState();
    const [facts, setFacts] = useState();
    let { id } = useParams();
    const navigate=useNavigate();
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/animal/${id}`);
        console.log(response);
        setName(response?.data?.animal?.name);
        setHabitat(response?.data?.animal?.habitat);
        setLifespan(response?.data?.animal?.lifespan);
        setDiet(response?.data?.animal?.diet);
        setFacts(response?.data?.animal?.facts);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data =await  axios.patch(`http://localhost:8080/animal/${id}`,{
            name,habitat,lifespan,diet,facts
        });
        navigate("/")
        console.log("printing data", data);
    };
    return (
        <div className="bg-blue-400 w-[35rem] m-4 p-3 rounded-lg mx-auto">
            <h1 className="h-40 rounded-lg bg-black text-3xl font-bold text-white grid place-content-center w-full">
                Update the existing Data
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">Name:</label>
                    <input
                        className="py-2 rounded-lg px-3 border border-black"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">Habitat:</label>
                    <input
                        className="py-2 rounded-lg px-3 border border-black"
                        type="text"
                        value={habitat}
                        onChange={(e) => setHabitat(e.target.value)}
                    />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">lifespan:</label>
                    <input
                        className="py-2 rounded-lg px-3 border border-black"
                        type="text"
                        value={lifespan}
                        onChange={(e) => setLifespan(e.target.value)}
                    />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">diet:</label>
                    <input
                        className="py-2 rounded-lg px-3 border border-black"
                        type="text"
                        value={diet}
                        onChange={() => setDiet(e.target.value)}
                    />
                </div>
                <div className="text-lg flex flex-col">
                    <label className="font-semibold">facts:</label>
                    <textarea
                        rows={5}
                        cols={10}
                        className="py-2 rounded-lg px-3 border border-black"
                        type="text"
                        value={facts}
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

export default Updateform;
