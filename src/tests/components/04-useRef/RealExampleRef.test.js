import React from 'react'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'
import { shallow } from 'enzyme'


describe('tests on <RealExampleRef />', () => {
    const wrapper = shallow(<RealExampleRef />)

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
        
    })

    test('should show <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })
})
