import React from 'react'


/* El Memo se utliza para que este componente solo se actualice si cambia la prop value en este caso. Se utiliza
mucho cuando hay llamadas fetch para evitar que vuelva a hacerlas en caso de que cambie el state del componente padre 
por ejemplo, que no afecta en nada a este. */

export const Small = React.memo(({value}) => {
    console.log("Component Mounted")
    return (
        <small>
            {value}
        </small>
    )
})
