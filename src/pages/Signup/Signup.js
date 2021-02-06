import React from 'react';
import Header from '../../components/Header/Header';
import devicesImg from '../../images/misc/devices.png';
import { Main, Devices, Text, Button } from './Signup.styles';

export default function Login() {
  return (
    <>
      <Header signup />

      <Main>
        <div>
          <Devices
            src={devicesImg}
            alt="drawing of a laptop, monitor, tablet and mobile phone"
          />
          <Text>
            <h2>
              STEP <span>1</span> OF <span>3</span>
            </h2>
            <h1>Finish setting up your account</h1>
            <p>
              Netflix is personalized for you. Create a password to watch
              Netflix on any device at any time.
            </p>
          </Text>

          <Button big type="button">
            CONTINUE
          </Button>
        </div>
      </Main>
    </>
  );
}
