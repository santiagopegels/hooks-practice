import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

/* Si en el componente ShowIncerement utilizamos React.memo() para evitar el re-renderizado, esto no va a funcionar porque
cuando el estado counter cambia el componente padre se vuelve a renderizar y la función increment es tomado como 
un argumento nuevo, haciendo que ShowIncrement se vuelva a renderizar.
 Para evitar esto se ultiliza el useCallback para que react sepa que la función no ha cambiado si la dependencia (setCounter)
 no ha cambiado. Dentro del setCounter se utiliza una función flecha con la variable counter para evitar colocar a counter
 como dependencia del useCallback (Si colocamos a counter como dependencia el resultado sería el mismo al de no utilizar useCallback) */
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    /*     const increment = () => {
            setCounter(counter + 1)
        } */

    const increment = useCallback(() => {
        setCounter(counter => counter + 1)
    }, [setCounter])


    return (
        <div>
            <h1>CallbackHook: {counter}</h1>
            <hr></hr>

            <ShowIncrement increment={increment} />
        </div>
    )
}
