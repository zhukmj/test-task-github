import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

export function Loader() {
  return (
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}
