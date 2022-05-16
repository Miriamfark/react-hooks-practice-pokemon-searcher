import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, frontImage, backImage }) {

  const [image, setImage] = useState(true)

  function handleImageClick() {
    setImage(!image)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img 
          onClick={handleImageClick}
          alt="oh no!" 
          src={ image ? frontImage : backImage} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
