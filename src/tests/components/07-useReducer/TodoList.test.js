import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from '../../../components/07-useReducer/TodoList'
import { mockTodosData } from '../fixtures/mockTodosData'


describe('Tests on <TodoList />', () => {
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoList
            todos={mockTodosData}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('should has all <TodoListItem /> elemnts', () => {

        expect(wrapper.find('TodoListItem').length).toBe(mockTodosData.length)

        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))

    })

        

})
