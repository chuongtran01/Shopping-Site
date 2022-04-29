import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { login } from '../userSlice';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            const action = login(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)

            // close dialog when register successfully
            const {closeDialog} = props;
            if (closeDialog) {
                closeDialog()
            }
        } catch (error) {
            enqueueSnackbar(error.message, {variant:'error'})

        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;