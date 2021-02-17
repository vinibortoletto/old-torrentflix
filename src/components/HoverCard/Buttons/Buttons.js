import React from 'react';

// Icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Styles
import { Container } from './Buttons.styles';

export default function Buttons() {
  return (
    <Container>
      <div className="main-buttons">
        <button className="active" type="button">
          <PlayArrowIcon />
        </button>

        <button type="button">
          <AddIcon />
        </button>

        <button type="button">
          <ThumbUpAltIcon />
        </button>

        <button type="button">
          <ThumbDownAltIcon />
        </button>
      </div>

      <div className="expand-button">
        <button type="button">
          <ExpandMoreIcon />
        </button>
      </div>
    </Container>
  );
}
