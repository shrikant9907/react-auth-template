import React from 'react'
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const FormHeader = styled(Typography)`
  margin-bottom: 10px;
  padding: 15px 0;
  text-align: center;
  font-size: 35px;
  line-height: 40px;
  font-weight: 600;
  color: rgba(0,0,0,0.7)
`;

const FormHeadingStyled = ({ children }) => {
  return (
    <FormHeader variant='h1'>{children}</FormHeader>
  )
}

export default FormHeadingStyled