import React from 'react'
import { Link } from "react-router-dom";
function LocationDetalis({ location }) {
    const { id, name, type, dimension, residents } = location;
    return (

        <tr>
            <th className=' '>{id}</th>
            <Link to={`/residents/${id}`}><td className='hover:bg-green-200'>{name}</td></Link>
            <td >{type}</td>
            <td >{dimension}</td>
            <td >{residents.length}</td>
        </tr>


    )
}

export default LocationDetalis