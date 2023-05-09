import React, {useState} from 'react'

function TextForm(props) {

    const handleSetText = (event) =>{
        // console.log(Text);
        setText(event.target.value);
    }

    const handleUpText = () =>{
        // console.log(Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
    }

    const handleloText = () =>{
        // console.log(Text);
        let newtext = Text.toLowerCase();
        setText(newtext);
    }

    const handleclearText = () =>{
        // console.log(Text);
        let newtext = '';
        setText(newtext);
    }

    const handleselectText = ()=>{
        let newtext = Text.selectAll(Text);
        setText(newtext);
    }

    const [Text, setText] = useState("");
  return (
   <div>
    <div className="form-group my-3">
         <label htmlFor="mybox"><h2>{props.heading}</h2></label>
         <textarea className="form-control" id="mybox" value={Text} onChange={handleSetText} rows="6"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-1" onClick={handleUpText}>Convert To UpperCase</button>
    <button type="button" className="btn btn-primary mx-1" onClick={handleloText}>Convert To LowerCase</button>
    <button type="button" className="btn btn-primary mx-1" onClick={handleclearText}>Clear Text</button>
    <button type="button" className="btn btn-primary mx-1" onClick={handleselectText}>Select Text</button>

    <div>
        <h2>Text Summary</h2>
        <p>Number of characterrs: {Text.length}</p>
        <p>Number of words: {Text.split(" ").length}</p>
        <p>Number of minutes to read: {0.082 * Text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter the text to see preview here"}</p>
    </div>
    </div>
  )
}

export default TextForm
