import { useState, useEffect } from "react";
import axios from "axios";

function UserForm({setDidSubmit, setMatches}) {
    const initialState = {
        "favColor": '',
        "dist": '',
        "origin": '',
        "minAge": '',
        "maxAge": ''
    }

    const [formData, setFormData] = useState(initialState);
    const { favColor, dist, origin, minAge, maxAge } = formData;

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        let queryString = new URLSearchParams(formData).toString(); 
        const res = await axios.get(`http://localhost:3001/users?${queryString}`);
        setMatches(res.data.results);
        setDidSubmit(true);
    }

    return(
        <div>
        <h2>Form goes here</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="favColor">Favorite Color: </label>
            <input
                type="text"
                id={favColor}
                name="favColor"
                value={favColor}
                onChange={handleChange}
                placeholder="green">
            </input>
            <label htmlFor="dist">Maximum miles from you: </label>
            <input
                type="text"
                id={dist}
                name="dist"
                value={dist}
                onChange={handleChange}
                placeholder="20">
            </input>
            <label htmlFor="origin">Your location in lat/long coordinates: </label>
            <input
                type="text"
                id={origin}
                name="origin"
                value={origin}
                onChange={handleChange}
                placeholder="-122.419416, 37.774929">
            </input>
            <label htmlFor="minAge">Minimum age: </label>
            <input
                type="text"
                id={minAge}
                name="minAge"
                value={minAge}
                onChange={handleChange}
                placeholder="25">
            </input>
            <label htmlFor="maxAge">Maximum age: </label>
            <input
                type="text"
                id={maxAge}
                name="maxAge"
                value={maxAge}
                onChange={handleChange}
                placeholder="100">
            </input>
            <button type="submit">Find my stars</button>
        </form>
        </div>
    )
}

export default UserForm;