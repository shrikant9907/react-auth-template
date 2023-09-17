import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const GoBackLinkBox = styled(Box)`
  padding: 30px 0 20px 0;
  text-align: center;
  color: rgba(0,0,0,0.6);
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: rgba(0,0,0,0.8);
`;

const GoBackLinkStyled = ({ label, link }) => {
  return (
    <GoBackLinkBox>
      <LinkStyled to={link ?? "/"}>
        {label ?? "Go back"}
      </LinkStyled>
    </GoBackLinkBox>
  )
}

export default GoBackLinkStyled