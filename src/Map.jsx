import {useState, useEffect} from "react";

function Map({matches, setMatches}) {
    const [names, setNames] = useState([]);
    useEffect(() => async function removeDuplicates() {
        const unique = [];
        matches.forEach(match => {
            if (!unique.includes(match.properties.name)) {
                unique.push(match.properties.name);
            }
        });
        setNames(unique);
    },[]);

    return(
        <div>
            <h2>Map goes here</h2>
            <h3>Here's who we found for you:</h3>
            {names.map((name, i) => <p key={i}>{name}</p>)}
        </div>

    )
}

export default Map;

        /**  https://leafletjs.com/examples/geojson/)*/

        /**arr.filter((item, 
            index) => arr.indexOf(item) === index);
    } */