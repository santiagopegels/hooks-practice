import {useCounter} from '../../hooks/useCounter'
import { renderHook } from '@testing-library/react-hooks'

describe('hook useCounter test', () => {
    test('should return default values', () => {
        
        const {result} = renderHook( ()=> useCounter() )

        expect(result.current.state).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')


    })
    
})
