import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import About from './About'

test('renders content', () =>{
    const about = {
        content: 'This is a test',
        important: true
    }

    const component = render(<About/>)

    console.log(component)
})