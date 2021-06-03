import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import { heavyProcess } from '../../helpers/heavyProcess'

export const MemoHook = () => {

    const { state: counter, increment } = useCounter(2000)
    const [show, setShow] = useState(true)



    /* Solo cuando el estado del counter cambia, la función heavyProcess se va a ejecutar y guardar
    el resultado en memoHeavyProcess. De esta forma evitamos ejecutar funciones cuando estados que no afectan a esta
    son modificados */
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h3>Counter: <small>{counter}</small></h3>
            <hr></hr>

            <p>{memoHeavyProcess}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
