import React from 'react'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/08-useContext/LoginScreen'
import { UserContext } from '../../../components/08-useContext/UserContext'

describe('Tests on <LoginScreen />', () => {

    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('should execute setUser with the expected argument', () => {
        
        wrapper.find('button').prop('onClick')()

        expect(setUser).toHaveBeenCalledWith({
            id: 1123,
            name: 'Test'
        })

    })
    

})
