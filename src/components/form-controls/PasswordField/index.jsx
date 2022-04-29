import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import * as React from 'react';
import {  useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '../../../../node_modules/@material-ui/core/index';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.func,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const {form, name, label, disabled } = props
    const { errors, formState } = form
    const hasError = !!errors[name]
    // console.log(errors, formState.touched[name]);

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(x => !x)
    }
    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Controller
            name={name}
            control={form.control}
            as={OutlinedInput}
            id={name}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            disabled={disabled}
          />
          <FormHelperText error={hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;