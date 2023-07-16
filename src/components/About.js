//import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    //const [btnText,setBtnText]=useState('Enable Dark Mode')
//     const toggleStyle=()=>{
//        if(myStyle.color==='black') {setMyStyle({
//              color: 'white',
//             backgroundColor: 'black',
//             border: '2px solid white'
//         })
//         setBtnText('Enable light Mode')
// }
// else{
//     setMyStyle({
//         color: 'black',
//         backgroundColor: 'white'
//     })
//     setBtnText('Enable Dark Mode')
// }
//     }
let myStyle = {
  color: props.mode ==='dark'? 'white' : '#042743',
  backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
  
}

  return (
   
    
    <div className='container' style={myStyle}>
        <h1 className="my-3" style={{color: props.mode ==='dark'? 'white' :  '#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        <strong>About</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       This app is useful for analyxing the text 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo" >
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        It is free to use designed by me .
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree" >
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        browser is easy to use . It is reliable to use.
      </div>
    </div>
  </div>
</div>

    
    </div>
    
  )
}
