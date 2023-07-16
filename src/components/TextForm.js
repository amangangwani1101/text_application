import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
         console.log("Uppercase was clicked: " + text);
         let newText=text.toUpperCase();
         setText(newText);
         props.showAlert("converted to upper case","success")
     }
     const handleLoClick=()=>{
        console.log("Lowercase was clicked: " + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success")
    }
    const handleCopyClick=()=>{
      var text=document.getElementById('textBox')
      text.select()
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied clipboard","success")
      
  }
     const handleOnChange=(event)=>{
         console.log("On change");
         setText(event.target.value)
     }
 
     const [text,setText] = useState('') //deafult value of text that is put in text area like value={text}
 
  return (
   
    <div className='container' style={{color:props.mode==='light'? '#20305d':'white'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':'rgb(25 37 75)',color:props.mode==='light'? '#20305d':'white'}} id="textBox" rows="8" placeholder='enter the text here'></textarea>
</div>
<button className='btn btn-primary mx-2 my-2  ' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-success mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-success mx-2 my-2' onClick={handleCopyClick}>Copy text</button>
<div className="container2 my-3">
<h2>Summary of Text</h2>
<p> <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
<p><b>{ 0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}</b> minutes to read </p>
</div>
    </div>
  )
}
