import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import SignIn from './signin'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
export default function LandingPage(){
  return (
 <>
    <SignIn/>
</>);
  }
  const IndexLink = () => (
    <p>
      <Link href='/'>
        <a style={{color:"white"}}>HomePage 🏠</a>
      </Link>
    </p>
  );
  export{ IndexLink}
