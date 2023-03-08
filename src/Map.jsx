import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

function Map({matches}) {
    const locations = matches.map(match => match.locationHistory.features);

    const coordinates = locations[0].map(location => location.geometry.coordinates);

    const center = coordinates[0];
console.log(matches)
    return(
        <div>
            {!matches.length  ?
            <h3>😞 Sorry, we couldn't find any matching stars for you today.</h3>
            :
            <div>
                <h3>Here's who we found for you:</h3>
                {matches.map((match, i) => <p key={i}>{match.properties.name}</p>)}
                {/* {coordinates.map(coordinate =>  */}
                <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {coordinates.map((coordinate, i) => 
                    <Marker position={coordinate} key={i}>
                        <Popup>
                            {matches.map(match =>  match.properties.name)} <br />
                            Age: {matches.map(match => match.properties.age)} <br />
                            Favorite color: {matches.map(match => match.properties.fav_color)}
                        </Popup>
                    </Marker>)}                   
            </MapContainer>
            {/* )} */}
          </div>}
        </div>
    )
}

export default Map;