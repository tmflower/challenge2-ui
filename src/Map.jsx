import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

function Map({matches}) {
    const position = [51.505, -0.09]

    return(
        <div>
            {matches.length !== 0 ?
            <div>
                <h3>Here's who we found for you:</h3>
                {matches.map((match, i) => <p key={i}>{match.properties.name}</p>)}
            </div>
            :
            <h3>😞 Sorry, we couldn't find any matching stars for you today.</h3>
            }
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
          </MapContainer>
        </div>

    )
}

export default Map;