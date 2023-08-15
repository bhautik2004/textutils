import { useState } from "react";
import React from "react";


export default function Textbox(props) {
  const [text,setext] = useState('');
  const handleupclick=()=>{
    setext(text.toUpperCase());
    props.showAlert("Converted To Uppercase..","success");
  }

  const handleonchage=(event )=>{
      setext(event.target.value);
  }
  const handleloclick=()=>{
    setext(text.toLowerCase());
    props.showAlert("Converted To Lowercase..","success");
  }
  const handlecopy=()=>{
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied To Clipboard ","success");
  }
  const handleclear =()=>{
    setext('');
    props.showAlert("Text Has Been Clear","success");
  }
  return (
    <div>
      <>
        <div className="container "style={{color :props.mode === 'light'?'#042743':'white'}}>
          <div className="mb-3 mt-4 " >
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <h2>{props.title}</h2>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              value={text}
              onChange={handleonchage}
              style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743 '}}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleupclick} type="submit">
                  Convert Text Into UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleloclick} type="submit">
                  Convert Text Into LowerCase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handlecopy} type="submit">
                  Copy Text
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleclear} type="submit">
                  Clear Text
          </button>
        </div>
        <div className="container my-4"style={{color :props.mode === 'light'?'#042743':'white'}}> 
      <h2>Your Text Summary</h2>
      <p>
        Character  <b>{text.length}</b>
      </p>

      <p>
         Words <b>{text.trim(" ").length===0?0:text.trim(" ").split(" ").length} </b>
      </p>
      <p>
         <b>{text.length === 0?0:0.008 * text.split(" ").length}</b> Minuts Read
      </p>
      <h2>Preview</h2>
      <p>
        {text.length>0?text:"Enter You Text To Preview Here"}
      </p>
        </div>
      </>
    </div>
  );
}
