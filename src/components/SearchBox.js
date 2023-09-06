import React, {useState} from 'react'


export default function SearchBox(props) {
  
  const handleUpClick =() =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
  }

  const lowerCase =()=>{
    let k=text.toLowerCase();
    setText(k);
  }

  const emt=()=>{
    setText('')
  }

  const nks=()=>{
    let p=text.trim().split(/\s+/).join(" ");
    setText(p);
  }

  const [text , setText] = useState('Enter Text Here');
  
  return (
    <div class={` bg-${props.darkMode} text-${props.darkMode === 'dark' ? 'white' : 'dark'}  rounded  pr-3 pb-3 pl-3 `}>
  <div className='container'>          
 <h3 className='mt-5 pt-5'>Enter Your Text Below</h3>
<div className="mb-3">
  <textarea className={` form-control bg-${props.darkMode === 'dark' ? 'black' : 'white'} text-${props.darkMode === 'dark' ? 'white' : 'black'} `}  value={text}  onChange={handleOnChange} id="myBox" rows="7"  ></textarea>
  
</div>
<button className="btn btn-success " onClick={handleUpClick}>Change into Uppercase</button>
<button className="btn btn-primary ms-2 " onClick={lowerCase}>Change into Lowercase</button>
<button className="btn btn-warning ms-2 " onClick={nks}>Remove Extra Space</button>
<button className="btn btn-danger ms-2 " onClick={emt}>Clear Text</button>
</div>
   <div className="container">
    <h3 className='mt-3'>Text Summary</h3>
    {/* <p>Word Count = {text.split(" ").length}</p> */}
    <p>Word Count = {text.trim().split(/\s+/).filter(Boolean).length}</p>
    <p>Total Characters = {text.trim().split(/\s+/).filter(Boolean).join("").length}</p>
    <h3>Preview-</h3>
    <p id="koko" >" {text} "</p>
   </div>
 


</div>
  )
}
