import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';
import { Repository } from './types';
import { RepositoriesList } from './RepositoriesList';
import { Loader } from '../../components/Loader';
import { NoData } from '../../components/NoData';

const Wrapper = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 120px;
`;

interface SearchData {
  search: {
    nodes: Repository[];
  };
}

export function RepositoriesPage() {
  const { loading, data } = useQuery<SearchData>(QUERY);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Typography variant="h4">Repositories</Typography>

      {data && data.search.nodes.length > 0 ? (
        <RepositoriesList repositories={data.search.nodes} />
      ) : (
        <NoData>No repositories found</NoData>
      )}
    </Wrapper>
  );
}

const QUERY = gql`
  query ReactRepositories {
    search(query: "react sort:stars", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          url
          stargazerCount
          forkCount
        }
      }
    }
  }
`;
