import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';
import './magicbox.scss'

MagicBox.propTypes = {
    
};

function MagicBox(props) {
    const color = useMagicColor()

    return (
        <div 
        className='magic-box'
        style ={{ backgroundColor: color}}
        >
            
        </div>
    );
}

export default MagicBox;