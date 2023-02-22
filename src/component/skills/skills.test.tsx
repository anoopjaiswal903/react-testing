import React from 'react';


import {render ,screen , logRoles}  from "@testing-library/react"
import Skills from "./Skills"

describe('Skills',()=>{
    const skills = ["html" , "css","js"]


    test('render correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
      expect(listElement).toBeInTheDocument();
    })
    
    test('render a list of skill', ()=>{
        render(<Skills skills={skills}/>)
        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })

    test('start button is not render ' ,()=>{
        render(<Skills skills={skills}/>)
        const startLearningButton = screen.queryByRole('button',{
            name : 'start learning'
        })
       expect(startLearningButton).not.toBeInTheDocument()       
    })

    test('start button is eventual displayed ' ,async ()=>{
        render(<Skills skills={skills}/>)
        const startLearningButton = await screen.findByRole('button',{
            name : 'start learning'
        },
        {
            timeout:2000
        })
       expect(startLearningButton).toBeInTheDocument()       
    })


    
    //debugging
    //logRoles
    test('start button is eventual displayed ' ,async ()=>{
        const view = render(<Skills skills={skills}/>)
        // screen.debug()
        logRoles(view.container)
        const startLearningButton = await screen.findByRole('button',{
            name : 'start learning'
        },
        {
            timeout:2000
        })
        // screen.debug()
       expect(startLearningButton).toBeInTheDocument()       
    })
})