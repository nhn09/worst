import React from 'react'
import InfoItems from './InfoItems'
import '../index.css';



const Cards = ({items,isLoading}) => {
    return isLoading ? (<h1>Loading</h1> ) :
    <>
     
     < div   style={{display: 'flex', flexDirection: 'row'}} >
         
            

             {items.slice(3, 6).map ( items => (
            
            
            <InfoItems className="mid" key={items.id} item={items} > </InfoItems>
            
        ))}
   
     </div>
     <div className='gap'/>


< div style={{display: 'flex', flexDirection: 'row'}} >
         
            {items.slice(0, 3).map ( items => (


<InfoItems key={items.id} item={items} > </InfoItems>

))}

</div>
</>
      
    
}

export default Cards



 

 



