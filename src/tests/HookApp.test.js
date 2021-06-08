import React from 'react';
import { HookApp } from '../HookApp';
import { shallow } from 'enzyme';

describe('<HookApp /> tests', () => {
    test('should show correctly', () => {

        const wrapper = shallow( <HookApp />);

        expect(wrapper).toMatchSnapshot();

    })

}) 
