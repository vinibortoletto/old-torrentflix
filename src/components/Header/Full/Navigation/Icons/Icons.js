import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../../../contexts/Data';
import { List, ProfileMenu, NotificationMenu } from './Icons.styles';
import profileImg from '../../../../../images/users/1.png';
import notification1 from '../../../../../images/misc/notification-1.jpg';
import notification2 from '../../../../../images/misc/notification-2.jpg';

// FIXME: Add pt-br translation

export default function Icons() {
  const { data, width } = useData();

  return (
    <div>
      <List>
        <li className="search">
          <SearchIcon />
        </li>
        <li className="notification">
          <button type="button">
            <NotificationsIcon />
          </button>

          <NotificationMenu className="notification-menu">
            <ul>
              <li>
                <img src={notification1} alt="new notification" />
                <div>
                  <h1>Now available season 7</h1>
                  <h2>1 day</h2>
                </div>
              </li>
              <li>
                <img src={notification2} alt="new notification" />
                <div>
                  <h1>You haven&apos;t watched Kingdom</h1>
                  <h2>3 day</h2>
                </div>
              </li>
            </ul>
          </NotificationMenu>
        </li>
        <li className="profile">
          <button id="profile-button" type="button">
            <img src={profileImg} alt="user profile pic" />
          </button>

          <ProfileMenu className="profile-menu">
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
          </ProfileMenu>
        </li>
      </List>
    </div>
  );
}
