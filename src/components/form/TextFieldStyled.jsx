
import React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { InputLabel } from '@mui/material';
import styled from '@emotion/styled';

const FieldGroupStyled = styled('div')`
  margin-bottom: 20px;
`;

const FieldLabelStyled = styled(InputLabel)`
  display: inline-block;
`;

const FieldStyled = styled(TextField)`
  .MuiOutlinedInput-root {
    color: rgba(0,0,0,0.6);
    height: 50px;
    border-radius: 10px;
    & fieldset {
      border-color: rgba(0,0,0,0.1); 
    }
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline{
    border:1px solid rgba(0,0,0,0.2); 
  }

  & .MuiFormHelperText-root {
    margin: 5px 0 0 0;
  }
`;

const RequiredMark = styled('span')`
  color: #d32f2f;
  margin-left: 5px;
`;

const TextFieldStyled = (props) => {
  const { label, error, errorMessage, id, ...rest } = props;
  return (
    <FieldGroupStyled>
      {label && <FieldLabelStyled htmlFor={id}>
        {label}
        {rest.required && <RequiredMark>*</RequiredMark>}
      </FieldLabelStyled>}
      <FieldStyled
        {...rest}
        autoComplete='off'
        error={error}
        required={false}
      />
      {error && errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FieldGroupStyled>
  )
}

export default TextFieldStyled;