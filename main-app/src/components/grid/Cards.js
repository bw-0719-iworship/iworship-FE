import React, { useState, useEffect } from "react";
import axios from 'axios'
import CardsList from './CardsList'




export default function Cards() {

    const [churches, setChurches] = useState([])


    useEffect( () => {
        axios.get('https://api.myjson.com/bins/7gt6p')
        .then(res => {
            console.log(res)
            setChurches(res.data)
        })
    }, [])


    return(
        <div className='peggy'>

            {churches.map(e => (
                <CardsList {...e} />
            ))}

        </div>
    )
}
