
import React from 'react';
import TextFieldStyled from './TextFieldStyled';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';

const InputAdornmentStyled = styled(InputAdornment)`
  margin-right: 8px;
`;

const PasswordFieldStyled = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleToggleVisibility = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <TextFieldStyled
        fullWidth
        required
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornmentStyled position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggleVisibility}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornmentStyled>
          ),
        }}
        {...props}
      />
    </>
  )
}

export default PasswordFieldStyled;