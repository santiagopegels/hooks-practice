import React from 'react'
import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/08-useContext/HomeScreen'
import { UserContext } from '../../../components/08-useContext/UserContext'

describe('Tests on <HomeScreen />', () => {

    const user = {
        name: 'Test',
        email: 'test@test.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })

})
