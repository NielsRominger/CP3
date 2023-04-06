import './styles.scss';

import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

function ReposResults() {
  return (
    <div className="cards_container">
      <Card className="card">
        <Image
          className="card_image"
          src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra />
      </Card>
    </div>
  );
}

export default ReposResults;
