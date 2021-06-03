import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './layout.css'

export const Layout = () => {

    const { state: counter, increment } = useCounter(1)

    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    /* El useLayoutEffect se ejecuta despúes de la actualización completa del DOM.
     De esta forma nos aseguramos de evaluar atributos css, por ejemplo, del nuevo componente
    */
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr></hr>

            <blockquote className="blockquote text-end">
                <p className="mb-3" ref={pTag}> {quote} </p>

            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >
                Next Quote
            </button>
        </div>
    )
}
