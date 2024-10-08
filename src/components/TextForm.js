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
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        // props.showAlert("Copied to Clipboard!", "success");  
      };
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Extra spaces removed!", "success");
      }
        const speak =()=> {
           
            const utterance = new SpeechSynthesisUtterance(text);
         
            
            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[3]; // Choose a specific voice
          
         
            speechSynthesis.speak(utterance);
         }
    const handleOnChange =(event)=>{
        setText(event.target.value);    
    }
    
    const [text,setText]= useState('');
  return (
    <>
    <div className='container' style={{ color: props.mode === "dark" ? "white" : "#000000" }}>

        <h1>{props.heading}</h1>
     
        <div className="mb-3 ">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <div>
        <textarea className ="form-control" value={text}  onChange={handleOnChange} style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#000000",
            }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-info my-3 mx-2 ' onClick={handleUpClick}>convert to upper case</button>
        <button className='btn btn-info my-3 mx-2' onClick={handleUp}>convert to lower case</button>
        <button className='btn btn-info my-3 mx-2' onClick={handleclear}>clear</button>
        <button className='btn btn-info my-3 mx-2' onClick={speak}>speak</button>
        <button className='btn btn-info my-3 mx-2' onClick={handleCopy}>copy</button>
        <button className='btn btn-info my-3 mx-2' onClick={handleExtraSpaces}>Remove Extraspaces</button>
        
        </div>
    </div>
    <div className="container mb-3" style={{ color: props.mode === "dark" ? "white" : "#000000" }}>
        <h1>summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>

  )
}
