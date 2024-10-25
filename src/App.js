import React, { useState } from "react";


function App(){

    const [text, setText] = useState('')
    const [items, setItems] = useState([])

    function handleChange(event){
      
      setText(event.target.value)
    }

    function handleClick(event){
      setItems(preValue =>{
        return [...preValue, text]
      })
      setText('')
      event.preventDefault()
    }

    function handleDelete(id){
      setItems(preValue =>{
        return preValue.filter((item, index) =>{
          return index !== id
        })
      })
    }

  return <div className="form-container">
  <h2>Contact</h2>
  <form>
      <input type="text" 
      onChange={handleChange}
      value={text}
      placeholder="Enter items"/>
      <button type="submit" onClick={handleClick}>Submit</button>
      <ul>
        {items.map((item, index) =>{
          return <li
          key={index}
          id={index}
          onClick={() =>{
            handleDelete(index)
          }}
          >{item}</li>
        })}
      </ul>
  </form>
  </div>
}
export default App;