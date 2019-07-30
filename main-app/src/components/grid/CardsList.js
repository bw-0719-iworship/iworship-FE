import React from 'react'


const CardsList = ({ first_name, last_name, gender, email }) => {

    console.log(email)

    return(
        <div className='peggy'>

            <p>Email: {email}</p>

            <p>Name: {first_name} {last_name}</p>

            <p>Gender: {gender}</p>

            loololol.exe
        </div>
    )

}

export default CardsList