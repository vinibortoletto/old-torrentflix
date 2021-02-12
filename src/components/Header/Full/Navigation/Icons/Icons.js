import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../../../contexts/Data';
import { List } from './Icons.styles';
import profileImg from '../../../../../images/users/1.png';

export default function Icons() {
  const { data, width } = useData();

  return (
    <List>
      <li>
        <SearchIcon />
      </li>
      <li>
        <CardGiftcardIcon />
      </li>
      <li>
        <NotificationsIcon />
      </li>
      <li className="profile">
        <img src={profileImg} alt="" />
      </li>
    </List>
  );
}
