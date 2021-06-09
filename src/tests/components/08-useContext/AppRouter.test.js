import React from 'react'
import { AppRouter } from '../../../components/08-useContext/AppRouter'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/08-useContext/UserContext'

describe('tests on <AppRouter />', () => {

    const user = {
        name: 'Test',
        email: 'test@test.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

})
