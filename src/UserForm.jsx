import { useState } from "react";
import axios from "axios";

function UserForm({didSubmit, setDidSubmit, setMatches}) {
    const initialState = {
        "favColor": null,
        "distance": null,
        "origin": null,
        "minAge": null,
        "maxAge": null
    }

    const [formData, setFormData] = useState(initialState);
    const [cleanedData, setCleanedData] = useState({});

    const { favColor, distance, origin, minAge, maxAge } = formData;

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    const cleanFormData = () => {
        // const cleaned = Object.entries(formData).filter((value) => value !== null)
        const dataArr = Object.entries(formData);
        const cleaned = dataArr.filter(data => data[1] !== null);
        // console.log("cleanedFormData", cleaned);
        const dataObj = Object.fromEntries(cleaned); console.log("dataObj", dataObj)
        setFormData(dataObj); console.log("cleaned data", cleanedData)
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        cleanFormData();
        const queryString = new URLSearchParams(formData).toString(); console.log(queryString)
        const res = await axios.get(`http://localhost:3001/users?${queryString}`);
        console.log(res)
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
            <label htmlFor="distance">Maximum miles from you: </label>
            <input
                type="text"
                id={distance}
                name="distance"
                value={distance}
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
        {/* {didSubmit ? matches.map(match => match.properties.name) : null} */}
        </div>
    )
}

export default UserForm;