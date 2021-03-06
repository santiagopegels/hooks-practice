import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {

        // Esto se ejecuta cuando el componente se desmonta
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //Verificar siempre que el componente este montado antes de hacer el setState
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } 
            })
            .catch(()=>{
                setState({ 
                    data: null, 
                    loading: false, 
                    error: 'Fetch Error' 
                })
            })
    }, [url])

    return state
}
