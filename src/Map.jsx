function Map({matches}) {
    return(
        <div>
            <h2>Map goes here</h2>
            {matches.map(match => match.properties.name)}
        </div>

    )
}

export default Map;