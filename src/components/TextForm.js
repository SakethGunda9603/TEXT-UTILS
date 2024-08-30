import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUp=()=>{
        console.log(text);
        let nne=text.toLowerCase();
        setText(nne);
    }
    const handleUpClick =()=>{
        console.log("clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);

    }
    const handleclear=()=>{
        console.log(text);
        let nne=" ";
        setText(nne);
    }
    // const handlespaces =()=>{
    //     let nne = text.trim();
    //     setText(nne);
    //     };
        const speak =()=> {
            // Create a SpeechSynthesisUtterance
            const utterance = new SpeechSynthesisUtterance(text);
         
            // Select a voice
            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[3]; // Choose a specific voice
          
            // Speak the text
            speechSynthesis.speak(utterance);
         }
    const handleOnChange =(event)=>{
        setText(event.target.value);    
    }
    
    const [text,setText]= useState('');
  return (
    <>
    <div className='container'>

        <h1>{props.heading}</h1>
     
        <div className="mb-3 ">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className ="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className='btn btn-danger my-3 mx-2 ' onClick={handleUpClick}>convert to upper case</button>
        <button className='btn btn-success my-3 mx-2' onClick={handleUp}>convert to lower case</button>
        <button className='btn btn-info my-3 mx-2' onClick={handleclear}>clear</button>
        <button className='btn btn-info my-3 mx-2' onClick={speak}>speak</button>
        
        </div>
    </div>
    <div className="container mb-3">
        <h1>summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>

  )
}
