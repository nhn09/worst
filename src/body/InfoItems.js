import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';




const InfoItems = ( {item} ) => {
    return (
           

                 <Card className='mb-5'  className='card text-center' style={{ width: '50%' , height:'50%' }}>
                           <Card.Img className='overflow' variant="top" src="https://source.unsplash.com/random/300x200" />
                           <Card.Body>
                               <div className='card-body text-dark'>
                             <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                               <p>
                                {item.address.street},
                                {item.address.suite},
                                {item.address.city}
                              </p>
                                </Card.Text>
                                </div>
 
                           </Card.Body>
                </Card>


         )
  }
    
export default InfoItems
