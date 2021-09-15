import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../../../contexts/Data';
import { List, ProfileDropdownMenu } from './Icons.styles';
import profileImg from '../../../../../images/users/1.png';
import { DividingLine } from '../../../../DividingLine/DividingLine.styles';

// FIXME: Add pt-br translation

export default function Icons() {
  const { data, width } = useData();

  return (
    <div>
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
          <button id="profile-button" type="button">
            <img src={profileImg} alt="user profile pic" />
          </button>

          <ProfileDropdownMenu className="profile-dropdown-menu">
            <div>
              <ul id="primary-menu">
                <li>
                  <img src={profileImg} alt="user profile pic" />
                  <span>Profile 2</span>
                </li>
                <li>
                  <img src={profileImg} alt="user profile pic" />
                  <span>Profile 3</span>
                </li>
              </ul>

              <Link to="/">Manage profiles</Link>
            </div>

            <hr />

            <div id="secondary-menu">
              <ul>
                <li>
                  <Link to="account">Account</Link>
                </li>
                <li>
                  <Link to="/">Sing out of Netflix</Link>
                </li>
              </ul>
            </div>
          </ProfileDropdownMenu>
        </li>
      </List>
    </div>
  );
}
