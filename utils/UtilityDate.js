import React from 'react'

const UtilityDate = () =>
{

    let newDate = new Date()
    return (
        <div>
            <h1>
                It is: {newDate.toLocaleString()}
            </h1>
        </div>
    )

    /* let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `Time in Helsinki is: ${year}$ ${month < 10 ? `0${month}` : `${month}`}$ {date}` */
}

export default UtilityDate