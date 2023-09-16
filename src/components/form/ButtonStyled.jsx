import React from 'react'
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ButtonPrimary = styled(Button)`
  margin-bottom: 20px;
  border-radius: 8px;
  height: 50px;
  box-shadow: none;
`;

const ButtonStyled = (props) => {

  const { children, ...rest } = props;

  return (
    <div>
      <ButtonPrimary
        fullWidth
        disableRipple
        variant="contained"
        {...rest}
      >
        {children}
      </ButtonPrimary>
    </div>
  )
}

export default ButtonStyled