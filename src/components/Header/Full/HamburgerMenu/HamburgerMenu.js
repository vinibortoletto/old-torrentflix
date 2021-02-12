import MenuIcon from '@material-ui/icons/Menu';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import React from 'react';
import { Button } from './HamburgerMenu.styles';

export default function HamburgerMenu() {
  return (
    <Button type="button">
      <MenuIcon />
    </Button>
  );
}
