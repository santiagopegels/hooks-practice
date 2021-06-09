import { renderHook, act } from '@testing-library/react-hooks'
import {useForm} from '../../hooks/useForm'

describe('useForm tests', () => {
    const initialForm = {
        name: "test",
        email: "test@test.com"
    }

    test('should return a default form with initialForm data', () => {

         const {result} = renderHook( ()=> useForm(initialForm) )

         const [values, handleInputChange, reset] = result.current

         expect(values).toEqual(initialForm)
         expect(typeof handleInputChange).toBe('function')
         expect(typeof reset).toBe('function')
    })

    test('should change the name value', () => {

        const {result} = renderHook( ()=> useForm(initialForm) )

        const [, handleInputChange] = result.current

        act( ()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'testing'
                }
            })
        })

        const [values] = result.current

        expect(values).toEqual({...initialForm, name:"testing"})
   })
    
})
