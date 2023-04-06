import './styles.scss';

import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface Owner {
  avatar_url: string;
}

interface IReposResults {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  homepage: string;
  description: string;
}

interface ReposResultsProps {
  cardsDatas: IReposResults[];
}

function ReposResults({ cardsDatas }: ReposResultsProps) {
  return (
    <div className="cards-container">
      {cardsDatas.map((cardData) => (
        <Card key={cardData.id} className="card">
          <Image
            className="card_image"
            src={cardData.owner.avatar_url}
            wrapped
            ui={false}
          />
          <Card.Header>{cardData.name}</Card.Header>
          <Card.Meta>{cardData.full_name}</Card.Meta>
          <p>{cardData.homepage}</p>
          <p>{cardData.description}</p>
        </Card>
      ))}
    </div>
  );
}

export default ReposResults;
