import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const { state: counter, increment } = useCounter(1)

    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr></hr>

            {
                loading
                    ?
                    (
                        <div className="alert alert-success text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3"> {quote} </p>
                            <footer className="blockquote-footer">{author}</footer>

                        </blockquote>
                    )
            }

            {
                !loading &&
                <button
                    className="btn btn-primary"
                    onClick={() => increment(1)}
                >
                    Next Quote
            </button>
            }
        </div>
    )
}
