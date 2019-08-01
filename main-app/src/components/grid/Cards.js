import React from "react";
import CardsList from './CardsList'




export default function Cards({churches}) {


    return(
        <div className='cardContainer'>

            {churches.map(e => (
                <CardsList {...e} />
            ))}

        </div>
    )
}
