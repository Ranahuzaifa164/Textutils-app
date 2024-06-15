import React from 'react'
import { useState } from 'react';
export default function Textutils(props){
    const [text,setText]=useState('');
  const handleUpText =()=>{
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleLowText =()=>{
    let newText= text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>
    {
setText(event.target.value)
    }
    const handleClear =()=>
        {
            let newText= "";
            setText(newText)
        }
return(

<>
<div className={`container bg-${props.mode} text-${props.mode ===`light`? `dark`:`light`}`}>
<h1 >Textutils</h1>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleUpText}>UpperCase </button>
  <button type="button" className="btn btn-primary  mx-3 my-3" onClick={handleLowText}>LowerCase</button>
  <button type="button" className="btn btn-primary  mx-3 my-3"  onClick={handleClear}>Clear</button>
</div>
<div className='container'>
    <h1>Text Summary:</h1>
    <p>{text.split(" ").length} Words and {text.length} letters</p>
</div>
<div className='container'>
    <h1>Preview:</h1>
    <p>{text}</p>
</div>
</div>
</>
);
}
