import React from 'react';
import styled from 'styled-components/macro';
import { Typography, Paper } from '@material-ui/core';

const Wrapper = styled(Paper)`
  margin: 24px 0;
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
