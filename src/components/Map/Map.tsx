import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css'

/**
 * @category React Component
 *
 * The interactive map that includes image icons/popups at locations where photos were taken.
 *
 * @returns {ReactElement}
 */
const Map = () => {
    return (
        <MapContainer
            center={[32.8801, -117.2361]}
            zoom={13}
            // scrollWheelZoom={false}
            className="Map-container"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[32.8801, -117.2361]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
