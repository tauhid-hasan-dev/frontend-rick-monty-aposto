import React from 'react'

function LocationDetalis({ location }) {
    const { id, name, type, dimension } = location;
    return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>{type}</td>
            <td>{dimension}</td>
        </tr>
    )
}

export default LocationDetalis