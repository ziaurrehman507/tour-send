import React from 'react'
import './index.css'

const Checkout = () => {

    let getData = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')): [];
    
    return (
        <div className='rounded-4 p-5' style={{backgroundColor:'#d2d2d4'}}>
        
        {getData && getData.map((item)=>{
            return(
                
            < div className=' my-5'>
            <img className='rounded-5  w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRE8aKQy3Rtly-qofeGx8II4a2m2bI5XueA&usqp=CAU" yl5="" />
            <h2 className='text-center my-5'>Customer Details</h2>
            

            <h3>Name : {item.names}</h3>
            <h3>Persons: {item.totalPeoples}</h3>
            <h3>Pricing Per Person: ${item.countires}</h3>
            <h3>Days: {item.dayss}</h3>
            <h3>Total Amount for {item.totalPeoples} People = ${(item.totalPeoples * item.countires)}</h3>

            </div>
              )
         }) }        
        
    </div>
  )
}

export default Checkout