import './styles.scss';

import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

interface Owner {
  avatar_url: string;
}

interface IReposResults {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  homepage: string;
}

interface ReposResultsProps {
  cardsDatas: IReposResults[];
}

function ReposResults({ cardsDatas }: ReposResultsProps) {
  return (
    <>
      {cardsDatas.map((cardData) => (
        <Card key={cardData.id}>
          <Image
            className="card_image"
            src={cardData.owner.avatar_url}
            wrapped
            ui={false}
          />
          <Card.Header>{cardData.name}</Card.Header>
          <Card.Meta>{cardData.full_name}</Card.Meta>
          <p>{cardData.homepage}</p>
        </Card>
      ))}
    </>
  );
}

export default ReposResults;
