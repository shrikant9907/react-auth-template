import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const FormLayout = styled(Box)`
  position: fixed;
  background: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  padding: 20px 30px;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  right: 0;
  box-sizing: border-box;
`;

const FormFullHeightLayout = ({ children }) => {

  return (
    <FormLayout>
      {children}
    </FormLayout>
  )
}

export default FormFullHeightLayout