import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

// Still have one problem with rendering: Los Angeles should appear twice but only does once, why?
function Map({matches}) {

    const center = [37.7749, -122.4194];

    const myMatches = matches.map(match => {
        const matchData = {};

        matchData['name'] = match.properties.name;
        matchData['age'] = match.properties.age;
        matchData['color'] = match.properties.favColor;
        matchData['cities'] = match.locationHistory.features.map(feature => feature.properties.city);
        matchData['coords'] = match.locationHistory.features.map(feature => feature.geometry.coordinates);

        return matchData;
    });

    return(
        <div>
            {!matches.length  ?
            <h3>😞 Sorry, we couldn't find any matching stars for you today.</h3>
            :
            <div>
                <h3>Here's who we found for you:</h3>
                {matches.map((match, i) => <p key={i}>{match.properties.name}</p>)}
                <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {myMatches.map((match) => match.coords.map(coord =>
                    <Marker position={coord} key={coord}>
                        <Popup>
                            {match.name} <br />
                            Age: {match.age} <br />
                            Favorite color: {match.favColor} <br />
                            Last seen in:
                                <ul>
                                    <li className="listItem">{match.cities.map((city, i) => <p key={i}>{city}</p>)}</li>
                                </ul>
                        </Popup>
                    </Marker>))}
            </MapContainer>
          </div>}
        </div>
    )
}

export default Map;
