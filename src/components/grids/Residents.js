import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Residents() {
    const data = useLoaderData();
    const residents = data.residents;
    const [residentsObject, setResidentsObject] = useState([])
    console.log(residentsObject);


    useEffect(() => {
        residents.map(resident => {
            return fetch(resident)
                .then(res => res.json())
                .then(data => {
                    setResidentsObject(residentsObject => [...residentsObject, data])
                })
        })

    }, [residents])
    return (
        <div className='flex flex-col' >
            {
                residentsObject.map((resident, idx) => <div><span>{idx + 1}</span>{resident.name}</div>)
            }
        </div>
    )
}

export default Residents