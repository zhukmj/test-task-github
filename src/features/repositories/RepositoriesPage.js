import React from 'react';
import { gql, useQuery } from '@apollo/client';

export function RepositoriesPage() {
  useQuery(QUERY);

  return (
    <div>
      <div />
    </div>
  );
}

const QUERY = gql`
  query ReactRepositories {
    search(query: "react sort:stars", type: REPOSITORY, first: 10) {
      edges {
        node {
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
  }
`;
