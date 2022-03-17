import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeOutRef = useRef(null)

    function handleSearchTermChange(e) {
        const value = e.target.value
        setSearchTerm(value)

        if (!onSubmit) return;

        //SET
        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current)
        }

        typingTimeOutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm : value,
            }
            onSubmit(formValues)
        }, 300)

        
    }
    return (
        <form>
            <input
            type='text'
                value = {searchTerm}
                onChange = {handleSearchTermChange}   
            />
        </form>
    );
}

export default PostFilterForm;