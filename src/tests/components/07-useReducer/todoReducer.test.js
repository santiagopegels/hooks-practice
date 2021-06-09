import { todoReducer } from '../../../components/07-useReducer/todoReducer'
import { mockTodosData } from '../fixtures/mockTodosData'


describe('Tests on todoReducer', () => {
    test('should return default state', () => {
       
        const state = todoReducer(mockTodosData, {})

        expect(state).toEqual(mockTodosData)
    })

    test('should add a TODO', () => {
        
        const newTodo = {
            id: 3,
            desc:'Test 3',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(mockTodosData, action)

        expect(state.length).toBe(3)
        expect(state).toEqual([...mockTodosData, newTodo])
    })
    

    test('should delete a TODO', () => {
        
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(mockTodosData, action)


        expect(state.length).toBe(1)

    })

    test('should toggle a TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(mockTodosData, action)


        expect(state[0].done).toBe(true)
        expect(state[1]).toEqual(mockTodosData[1])

    })
    
})
