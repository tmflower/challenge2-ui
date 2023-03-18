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
        <h2>Who do you want to find?</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="favColor">Stars who share my favorite color: </label>
            <input
                type="text"
                id={favColor}
                name="favColor"
                value={favColor}
                onChange={handleChange}
                placeholder="enter your favorite color">
            </input>
            <label htmlFor="minAge">Stars who are at least this old: </label>
            <input
                type="text"
                id={minAge}
                name="minAge"
                value={minAge}
                onChange={handleChange}
                placeholder="enter the minimum age of stars you want to find">
            </input>
            <label htmlFor="maxAge">Stars who are no older than: </label>
            <input
                type="text"
                id={maxAge}
                name="maxAge"
                value={maxAge}
                onChange={handleChange}
                placeholder="enter the maximum age of stars you want to find">
            </input>
            <label htmlFor="dist">Stars who are no more than this many miles from me: </label>
            <input
                type="text"
                id={dist}
                name="dist"
                value={dist}
                onChange={handleChange}
                placeholder="enter the maximum distance of the location of stars you want to find">
            </input>
            <label htmlFor="origin">My lat/long coordinates: </label>
            <input
                type="text"
                id={origin}
                name="origin"
                value={origin}
                onChange={handleChange}
                placeholder="enter the latitude and longitude coordinates of your location">
            </input>
            <button type="submit" className="btn">Find my stars</button>
        </form>
        </div>
    )
}

export default UserForm;
