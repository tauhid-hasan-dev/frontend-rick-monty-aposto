import React from 'react'

function LocationDetalis({ location }) {
    const { id, name, type, dimension, residents } = location;
    return (
        <tr >
            <th className=' '>{id}</th>
            <td className='hover:bg-green-200'>{name}</td>
            <td >{type}</td>
            <td >{dimension}</td>
            <td >{residents.length}</td>
        </tr>
    )
}

export default LocationDetalis