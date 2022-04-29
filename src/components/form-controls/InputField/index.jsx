import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../../../node_modules/@material-ui/core/index';
import { useForm, Controller } from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.func,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled } = props
    const { errors } = form
    // show error even touched or un-touched
    const hasError =  errors[name]
    
    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;