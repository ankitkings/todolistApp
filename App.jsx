import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
const [inputList,setInputlist]=useState("");
const [items,setItems]=useState([ ]);
const itemEvent=(event)=>{
    setInputlist(event.target.value);
}
const itemList=()=>{
    setItems((oldItems)=>{
         return [...oldItems,inputList];
    })
    setInputlist("");
}
  
const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
        return oldItems.filter((arrElement,index)=>{
            return index !==id
        })
          
    })
};


return <>
<div className="mainDiv">
<div className="centerDiv">
<h1>TODO List </h1>
<input type="text" placeholder="Enter Task"
value={inputList}
onChange={itemEvent}/>
<button onClick={itemList}>+</button>
<ol>
{    items.map((inputTodo,index)=>{
      return <ToDoList 
      key={index}
      id={index}
      text={inputTodo}
      onSelect={deleteItems}
      />
    })}
</ol>
</div>
</div>


</>
}
export default App;