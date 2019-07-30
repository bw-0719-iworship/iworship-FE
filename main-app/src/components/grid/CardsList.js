import React from 'react'


const CardsList = ({ first_name, last_name, gender, email }) => {

    console.log(email)

    return(
        <div className='cardDetails'>

            <p>Name: {first_name} {last_name}</p>

            <p>{email}</p>

            <p>Gender: {gender}</p>

        </div>
    )

}

export default CardsList