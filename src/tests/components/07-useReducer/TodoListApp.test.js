import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoListApp } from '../../../components/07-useReducer/TodoListApp'
import { mockTodosData } from '../fixtures/mockTodosData'
import { act } from '@testing-library/react'

describe('Tests on <TodoListApp />', () => {

    const wrapper = shallow(<TodoListApp />)

    Storage.prototype.setItem = jest.fn(() => { })

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should add a TODO', () => {

        const wrapper = mount(<TodoListApp />)

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(mockTodosData[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(mockTodosData[1])
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoListApp (2)')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })

    test('should delete a TODO', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( mockTodosData[0])
        wrapper.find('TodoList').prop('handleDelete')( mockTodosData[0].id)

        expect(wrapper.find('h1').text().trim()).toBe('TodoListApp (0)')



    })
    


})
