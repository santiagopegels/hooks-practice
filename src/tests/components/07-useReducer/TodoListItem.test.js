import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../components/07-useReducer/TodoListItem'
import { mockTodosData } from '../fixtures/mockTodosData'

describe('Tests on  <TodoListItem />', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()
    const wrapper = shallow(
        <TodoListItem
            todo={mockTodosData[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should call handleDelete function', () => {

        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(mockTodosData[0].id)

    })

    test('should call handleToggle function', () => {

        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(mockTodosData[0].id)
        
    })
    
    test('should call handleToggle function', () => {

        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(mockTodosData[0].id)
        
    })

    test('should show the text correctly', () => {
        
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(`1. ${mockTodosData[0].desc}`)

    })
    
    test('should have complete class if the TODO.done is true', () => {
        
        const todo = mockTodosData[0]
        todo.done = true

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={0}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
        
    })

})
