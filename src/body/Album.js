import React from 'react'
import EachImage from './EachImage'




const Album = ({images,isLoading}) => {
    return isLoading ? (<h1></h1> ) :
    
    <div>
        {images.slice(0, 6).map ( images => (
        <EachImage key={images.id} image={images} > </EachImage>
       ))}


     </div>

        
      
}

export default Album
