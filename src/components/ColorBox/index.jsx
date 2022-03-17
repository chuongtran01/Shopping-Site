import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './colorbox.scss'

ColorBox.propTypes = {
    
};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'white', 'red', 'blue']
    const randomIndex = Math.trunc(Math.random() * 6)
    return COLOR_LIST[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('box_color') || 'deeppink'
    })

    function handleBoxClick() {
        // get random color
        const newColor = getRandomColor();
        setColor(newColor)
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div 
            className='color-box' 
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;