import React from 'react';
import styled from 'styled-components/macro';
import { Typography, Paper } from '@material-ui/core';

const Wrapper = styled(Paper)`
  padding: 48px 24px;
  text-align: center;
`;

type Props = {
  children: string;
};

export const NoData = ({ children }: Props) => {
  return (
    <Wrapper>
      <Typography>{children}</Typography>
    </Wrapper>
  );
};
