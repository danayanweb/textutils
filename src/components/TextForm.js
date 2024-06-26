import React, { useState } from 'react'

export default function TextForm(props) {

    // State
    const [text, setText] = useState('');

    // Button
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleCapClick = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText)
        props.showAlert("Capitialized!", "success")

    }
    const handleInverseClick = () => {
        let newText = text.split(' ').reverse().join(' ');
        setText(newText)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Text copied to clipboard'))
            .catch((err) => console.error('Failed to copy: ', err));
        props.showAlert("Coppied", "success")

    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!", "success")
    }
    // TextArea
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container my-3'>

                <h1 className={`heading text-left text-${props.mode === 'light' ? 'dark' : 'light'}`}> {props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows={10}
                    />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert To Capitialize</button>
                <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Inverse Text</button>
                <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy To ClipBoard</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container  my-3">
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summery</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(" ").length} words and {text.length} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} minutes to read</p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? text : "Enter the text in the textbox to preview"}</p>
            </div>
        </>



    )
}
