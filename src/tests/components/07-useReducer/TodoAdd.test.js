import React from 'react'
import { TodoAdd } from '../../../components/07-useReducer/TodoAdd'
import { shallow } from 'enzyme'

describe('Tests on <TodoAdd />', () => {

    const handleAddTodo = jest.fn()

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should not call handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0)
    })

    test('should call handleAddTodo function with an argument', () => {

        const value = 'Learn React'

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(1)

        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        })

        //expect that reset function has been executed
        expect( wrapper.find('input').prop('value') ).toBe('')
    })


})
