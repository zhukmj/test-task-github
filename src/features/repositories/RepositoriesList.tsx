import React from 'react';
import styled from 'styled-components';
import { Chip, List, ListItem, Paper } from '@material-ui/core';
import { StarBorder, DeviceHub } from '@material-ui/icons';
import { Repository } from './types';

const Wrapper = styled(Paper)`
  margin: 24px 0;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Counter = styled(Chip)`
  margin: 0 4px;
`;

type Props = {
  repositories: Repository[];
};

export function RepositoriesList({ repositories = [] }: Props) {
  return (
    <Wrapper>
      <List>
        {repositories.map((repo) => (
          <ListItem
            key={repo.id}
            button
            component="a"
            href={repo.url}
            target="_blank"
          >
            <Name>{repo.name}</Name>
            <Counter
              variant="outlined"
              color="primary"
              icon={<StarBorder />}
              label={repo.stargazerCount}
            />
            <Counter
              variant="outlined"
              color="secondary"
              icon={<DeviceHub />}
              label={repo.forkCount}
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
