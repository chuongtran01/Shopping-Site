import PropTypes from 'prop-types';
import React, { useState } from 'react';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm(props) {
    const { onSubmit } = props
    const [value, setValue] = useState('')

    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        // Prevent Reloading browser
        e.preventDefault()
        if (!onSubmit) return;

        const formValue ={
            title: value
        }

        onSubmit(formValue)

        // Reset form

        setValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={value} 
                    onChange={handleValueChange}>
                </input>
            </form>
        </div>
    );
}

export default TodoForm;