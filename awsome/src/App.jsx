import React from 'react';
import SlotM from './SlotM';


const App=() =>{
    return(
        <> 
        <h1 className='heading_style'> 🎰 welcome to <span style={{fontWeight:"bold"}}>Slot Machine</span> 🎰 </h1>
      
   <div className='slotm'>
       <SlotM x='😃' y='😃' z='😃' />
       <SlotM x='😃' y='😃' z='😃' />  
       <SlotM x='😆' y='😃' z='😃' />
  </div>


         </>
    )

};
export default App;