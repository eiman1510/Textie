import React, { useState } from 'react'


export default function About() {

  const [myStyle, myStyleSet] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btnText,setBtnText]=useState('Enable Light Mood');

  const toggleMood = () => {
    if(myStyle.color==='white'){
      myStyleSet({
        color:'black',
        backgroundColor:'white',
      })
      setBtnText('Enable Dark Mood');
    }
    else{
      myStyleSet({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white',
      })
      setBtnText('Enable Light Mood');
    }

  }

  return (
    <>
    <div className="container my-3" style={myStyle}>
    <h2 className='my-3'>About</h2>
      <div className="accordion my-2" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle}>
             What is Textie??
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>Textie is a Text-manupulation site</strong> Here you can manipulate your text according to your need.It is a free site for your school and college work.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={myStyle}>
              Why Textie?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
             Dont know the count of your essay? Get your words and letter count in seconds with textie.Want to know the count of a word in your text but dont have the time to read the entire text?Dont worry do it in seconds with <strong>Textie</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item"style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              What can you do?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <ul>
                <li>Convert to upper case</li>
                <li>Convert to lower case</li>
                <li>Get word count</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-danger" onClick={toggleMood}>{btnText}</button>
      </div>
      </div>
    </>

  )
}




