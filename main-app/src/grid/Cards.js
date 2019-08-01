import React from "react";
import CardsList from './CardsList'

import { CardsContext } from '../Components/context/CardsContext'
import { useContext } from 'react';




export default function Cards() {

    const state = useContext(CardsContext)


    return(
        <div className='cardContainer'>

            {state.map(e => (
                <CardsList {...e} />
            ))}

        </div>
    )
}
