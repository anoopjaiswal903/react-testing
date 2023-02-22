import { Skillsprops } from "./skills.types";
import React, { useEffect, useState } from 'react';
import '@testing-library/jest-dom';

 const Skills = (props: Skillsprops)=>{
    const {skills} = props;

    const [isLoggedIn ,seIsLoggedIn] = useState(false)

    useEffect(()=>{
      setTimeout(()=>{
        seIsLoggedIn(true)
      },500)
    },[])



    return(
        <>
          <ul>
            {skills.map((skills)=>{
                return <li key={skills}>{skills }</li>;
            })}
          </ul>
          {
            isLoggedIn?(<button>start learning</button>):(<button onClick={()=>seIsLoggedIn(true)}></button>)
          }
        </>
    );
};

export default Skills