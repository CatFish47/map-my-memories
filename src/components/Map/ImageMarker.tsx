import React from 'react'
import L from 'leaflet'
import { Marker } from 'react-leaflet'

type ImageMarkerProps = {
    position: [number, number]
    imgPath: string
}

const ImageMarker = (props: ImageMarkerProps) => {
    const { position, imgPath } = props

    const iconImage = new L.Icon({
        iconUrl: require(imgPath),
        iconRetinaUrl: require(imgPath),
        iconAnchor: undefined,
        popupAnchor: undefined,
        shadowUrl: undefined,
        shadowSize: undefined,
        shadowAnchor: undefined,
        iconSize: new L.Point(60, 75),
        className: 'leaflet-div-icon',
    })

    return <Marker position={position} icon={iconImage}></Marker>
}

export default ImageMarker
