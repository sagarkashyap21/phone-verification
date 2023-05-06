import React, { useState } from 'react'

export default function App() {
  let a = ["", "", "", "", "", ""]
  const [otp, setotp] = useState(a)
  const handleChange = (element, index) => {
    // console.log(element,index)
    if (isNaN(element.value)) { return false; }
    setotp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }
const keypressed=(e)=> {
  if(e.keyCode===8){
    let i=5
let d=otp[i]="";
setotp([...otp])
      
setTimeout(()=>{

  if(e.target.previousSibling){
    e.target.previousSibling.focus();
  }else{
    e.target.focus()
  }
 
},10)
  }
 
  if(e.keyCode===37){
    if(e.target.previousSibling){
      e.target.previousSibling.focus();
    }else{
      e.target.focus()
    }
  }

  if(e.keyCode===39){
    if(e.target.nextSibling){
      e.target.nextSibling.focus();
    }else{
      e.target.focus()
    }
  }
  
}



  return (
    <div className="container">
      <h1>Phone Verification</h1>
      <p className="p1">Enter the OTP you received on 89206-6XXXX</p>
      <div>
        {otp.map((data, index) => {
          return <input type="text" maxLength="1" onChange={(e) => handleChange(e.target, index)} className="otp-field" name="otp"     key={index} id="input" onKeyDown={e=>keypressed(e)} value={data} onFocus={e => e.target.select()} />

        })}

      </div>
      <div className="second">
        <p className="s1">Change Number</p>
        <p className="s2">Re-send OTP</p>
      </div>
      <button onClick={e => setotp([...otp.map((v) => "")])}>Verify Phone Number</button>
      {/* <button onClick={Delete}>delelte</button> */}
    </div>
  )
}
