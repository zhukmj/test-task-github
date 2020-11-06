import React from 'react';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { theme } from './common/theme';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './common/apolloClient';
import { RepositoriesPage } from './features/repositories/RepositoriesPage';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <div className="app">
            <RepositoriesPage />
          </div>
        </StylesProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
