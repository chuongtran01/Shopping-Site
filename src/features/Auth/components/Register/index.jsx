import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm/index';
import { register } from '../userSlice';
import { PropTypes } from 'prop-types'

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            // auto set username = email
            values.username = values.email

            const action = register(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)

            // close dialog when register successfully
            const {closeDialog} = props;
            if (closeDialog) {
                closeDialog()
            }

            // do sth when registering successfully
            enqueueSnackbar('Register Successfully', {variant:'success'})
        } catch (error) {
            enqueueSnackbar(error.message, {variant:'error'})

        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;