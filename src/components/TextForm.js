import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Upper case was clicked!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = () => {
        // console.log("Upper case was clicked!")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClearClick = () => {
        // console.log("Upper case was clicked!")
        let newText = '';
        setText(newText);
        props.showAlert("Text removed", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success")
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={(event) => { setText(event.target.value); }} id="mybox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#04364e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upprecase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary.</h2>
                <p><b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> character</p>
                <p><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to above texbox to preview it here."}</p>
            </div>
        </>
    )
}
