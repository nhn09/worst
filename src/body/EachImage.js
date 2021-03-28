import React from 'react'


const EachImage = ( {image} ) => {
    return (
           
           <div className='cardzone'>

            <img src={image.url} alt=''/>
        
           </div>
         )
  }
    
export default EachImage
