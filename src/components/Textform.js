import React, {useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState('');

    const handleUp=()=>{
        const text0=text.toUpperCase();
        setText(text0);
        props.showAlert("Converted to upper Case","Success!!");
    }
    const handleLower=()=>{
        const text0=text.toLowerCase();
        setText(text0);
        props.showAlert("Converted to lower Case","Success!!");
    }
    const handleClear=()=>{
        setText('');
        props.showAlert("Text cleared","Success!!!");
    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const WordCount=()=>{
        const w=document.getElementById('word');
        const c=document.getElementById('count');
        const val=text.split(w.value).length-1;
        c.innerHTML=val+" times";
        props.showAlert("Word found "+val+" times ","Success!!!");
    }
   
    return (
        <>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="box1" rows="8" value={text} onChange={handleChange} style={{backgroundColor: props.state==='light'?'#f8f9fa':'#212529',color: props.state==='light'?'#212529':'#f8f9fa'}}></textarea>
            </div>
            <button className={`btn btn-${props.btnClr} mx-2 my-2`} onClick={handleUp}>Convert to UpperCase</button>
            <button className={`btn btn-${props.btnClr} mx-2 my-2`} onClick={handleLower}>Convert to LowerCase</button>
            <button className={`btn btn-${props.btnClr} mx-2 my-2`} onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                <h2>Word Occurence</h2>
                <input type="text" id="word" style={{backgroundColor: props.state==='light'?'#f8f9fa':'#212529',color: props.state==='light'?'#212529':'#f8f9fa'}} />
            <button className={`btn btn-${props.btnClr} mx-2 my-2`} onClick={WordCount}>Check Count</button>
            <p id='count'></p>
               
            </div>
        </>
    )
}
