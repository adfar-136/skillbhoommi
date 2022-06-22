import React from 'react'

export let Greet = (props) =>{
    return( 
        <>
             
              <div>
                 <h1>Hello {props.name} also known as {props.heroName}</h1>
                   {props.children}
          
               </div>
        </>
          )
}


