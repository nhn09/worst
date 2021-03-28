import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Cards from './body/Info';
import Fade from './body/Slicl';
import './body/allcss.css'




const App=() => {




  const[items,setItems] = useState ([])
  const[images,setImages] = useState ([])
  const[isLoading,setIsLoading] = useState ([true])

  useEffect(()=>
 {
    async function GetAllUSers() {

      try{
        const result = await axios (`https://jsonplaceholder.typicode.com/users`)
        const image = await axios (`https://jsonplaceholder.typicode.com/photos`)

                setItems(result.data)
                setImages(image.data)
                setIsLoading(false)

      }catch
      {
        console.log(`Something went wrong`);
      };
        
    }
    GetAllUSers() ; 
      
 },[]);

  return (
    <div>
      <div className='gap'/>
      <div className='mid'><Fade/></div>
      
      <div className='gap'/>
      <Cards isLoading={isLoading} items={items} />
      
     
    </div>
  );
}

export default App;
