import {useCounter} from '../../hooks/useCounter'
import { renderHook, act } from '@testing-library/react-hooks'

describe('hook useCounter test', () => {
    test('should return default values', () => {
        
        const {result} = renderHook( ()=> useCounter() )

        expect(result.current.state).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test('should useCounter return value 100', () => {
                
        const {result} = renderHook( ()=> useCounter(100) )

        expect(result.current.state).toBe(100)
    })
    
    test('should useCounter increment the state', () => {
                
        const {result} = renderHook( ()=> useCounter(100) )

        const {increment} = result.current
        
        //permite ejecutar funciones de los hooks
        act( () => {
            increment()
        })

        const { state } = result.current
        expect(state).toBe(101)
    })

    test('should useCounter decrement the state', () => {
                
        const {result} = renderHook( ()=> useCounter(100) )

        const {decrement} = result.current
        
        //permite ejecutar funciones de los hooks
        act( () => {
            decrement()
        })

        const { state } = result.current
        expect(state).toBe(99)
    })

    test('should useCounter reset the state', () => {
                
        const {result} = renderHook( ()=> useCounter(100) )

        const {decrement, reset} = result.current
        
        //permite ejecutar funciones de los hooks
        act( () => {
            decrement()
            reset()
        })

        const { state } = result.current
        expect(state).toBe(100)
    })
    
})
