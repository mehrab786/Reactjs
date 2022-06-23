import React, { useState } from 'react'
import ToDoList from './ToDoList';

const App=()=>{
  const [inputList, setInputList]=useState(" ");  
  const [items,setItems]=useState([]);  
  
  
  const itemEvent=(event) =>{
          setInputList(event.target.value);
    }
    const listofItems=()=>{
     
      setItems((oldItems)  =>{
        return[...oldItems,inputList];
      });
      setInputList('');
    };
    const deleteItems=(id)=>{
      console.log("clicked");
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index!== id;
        })
      })
  }
  return(
          <>
            <div className='main_div'>
              <div className='center_div'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder='Add  Items Here'
                 onChange={itemEvent}
                 value={inputList} />
                <button onClick={listofItems}> + </button>
                

                <ol>
                  {items.map((itemval, index)=>{  
                  return (
                  <ToDoList 
                  // key{index} 
                  // id{index}
                  text={itemval}
                  onSelect={deleteItems} 
                  />
                  );
                  } )}
                </ol>
              </div>
            </div>
          </>

  );


};

export default App;


















//   const state= useState();
//   let time= new Date().toLocaleTimeString();
// const [count, setCount]=useState(0);

//   const IncNum=()=>{
//   setCount(count+1);
  
//   }

// changing time code onclick using hooks useSate functions
//...
//.
// let newtime= new Date().toLocaleTimeString();
// const state=useState();
// const[ctime,setCtime]=useState(newtime);
// const UpdateTime=()=>{
//   newtime= new Date().toLocaleTimeString();
//   setCtime(newtime);
// };
//..
//..

//DIGITAL CLOCK CODE
// let newtime= new Date().toLocaleTimeString();
// const state=useState();
// const[ctime,setCtime]=useState(newtime);
// const UpdateTime=()=>{
//      newtime= new Date().toLocaleTimeString();
//      setCtime(newtime);
//    };
// setInterval(UpdateTime,1000);
//   return(
  
// <h1>{ctime}</h1>
  /* <h1>
  //   {newtime}
  // </h1>
  //    <h1>{count}</h1>
  //   <button onClick={UpdateTime}>Click Me</button> */
