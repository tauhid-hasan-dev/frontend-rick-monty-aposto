import React from 'react'
import { Link } from "react-router-dom";
function LocationDetalis({ location }) {
    const { id, name, type, dimension, residents } = location;
    return (

        <tr className='px-5 lg:px-20 '>
            <th className=' '>{id}</th>
            <td className=' text-blue-500 hover:text-blue-700'><Link to={`/residents/${id}`}>{name}</Link></td>
            <td >{type}</td>
            <td >{dimension}</td>
            <td >{residents.length}</td>
        </tr >


    )
}

export default LocationDetalis