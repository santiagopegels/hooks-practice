import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100)
    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr></hr>

            <button onClick={increment} className="btn btn-primary me-2">+1</button>
            <button onClick={reset} className="btn btn-success me-2">Reset</button>
            <button onClick={()=>decrement(2)} className="btn btn-secondary">-2</button>
        </>
    )
}
