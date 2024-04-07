import React, {useState} from 'react';
import styles from './ColourPicker.module.css';

function ColourPicker() {

    const [colour, setColour] = useState("#FFFFFF");

    function handleColourChange(e) {
        setColour(e.target.value);
    }

    return(
        <>
            <div className={styles.colourPickerContainer}>
                <h1>Colour Picker</h1>
                <div className={styles.colourDisplay} style={{backgroundColor: colour}}>
                    <p>Selected Colour: {colour}</p>
                </div>
                <label>Select a Colour:</label>
                <input type="color" value={colour} onChange={handleColourChange}/>
            </div>
        </>
    );   

}

export default ColourPicker