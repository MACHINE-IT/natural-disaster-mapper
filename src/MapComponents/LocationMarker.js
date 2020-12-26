import React from 'react'
import '../index.css'
import locationIcon from './fire.svg'

export const LocationMarker = ({lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <img src={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker;