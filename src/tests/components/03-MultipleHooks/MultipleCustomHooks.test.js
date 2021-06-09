import React from 'react'
import { shallow } from 'enzyme'
import {MultipleCustomHooks} from '../../../components/03-MultipleHooks/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'


jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

beforeEach( () => {
    useCounter.mockReturnValue({
        state: 10,
        increment: () => {}
    })
})

describe('<MultipleCustomHooks /> tests', () => {

test('should show correctly', () => {

    useFetch.mockReturnValue({
        data: null, 
        loading: true,
        error:null
    })

    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
})

test('should show the information', () => {
    
    const data = [{
        author: 'Test',
        quote: 'Test Text'
    }]

    useFetch.mockReturnValue({
        data, 
        loading: false,
        error:null
    })

    const wrapper = shallow(<MultipleCustomHooks />)

    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-3').text().trim()).toBe(data[0].quote)
    expect(wrapper.find('footer').text().trim()).toBe(data[0].author)

})

})
