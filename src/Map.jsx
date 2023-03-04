

function Map({matches}) {

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
        </div>

    )
}

export default Map;

        /**  https://leafletjs.com/examples/geojson/)*/