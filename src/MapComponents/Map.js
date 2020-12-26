import '../index.css'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ( { eventData, center, zoom }) => {
    const markers = eventData.map((event, index) => {
        if(event.categories[0].id === 8){
            return <LocationMarker key={index} lat={event.geometries[0].coordinates[1]} 
                                   lng={event.geometries[0].coordinates[0]} 
                    />
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys = {{key: 'AIzaSyDqE5bJOal10az2Plh-KwGWRYfvrsJ8bbs'}}
                defaultCenter= {center}
                defaultZoom = {zoom}
            >
                {markers}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 37.773972,
        lng: -122.431297
    },
    zoom: 5 
}
export default Map;
